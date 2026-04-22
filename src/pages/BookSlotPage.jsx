import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  ChevronLeft,
  Trash2,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import CalendarView from '@/components/features/CalendarView';
import { useAuth } from '@/context/AuthContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const API_BASE = "https://vlab-backend-dl07.onrender.com";

const BookSlotPage = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const location = useLocation();
  const labNameFromState = location.state?.labName || 'Selected Lab';

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [duration, setDuration] = useState(1);
  const [events, setEvents] = useState([]);
  const [bookingToDelete, setBookingToDelete] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const confirmSectionRef = useRef(null);
  const timeSectionRef = useRef(null);

  const scrollToRef = (ref) => {
    const top = ref.current?.offsetTop || 0;
    window.scrollTo({ top: top - 100, behavior: 'smooth' });
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        credentials: "include"
      });

      const data = await res.json();

      const formattedEvents = data.bookings.map((booking) => {
        const isOwnBooking = user && booking.userId === user.email;

        return {
          id: booking.id,
          title: isOwnBooking
            ? `${booking.labName} (My Booking)`
            : `${booking.labName} (Booked)`,
          start: booking.start,
          end: booking.end,
          allDay: false,
          backgroundColor: isOwnBooking ? '#3b82f6' : '#ef4444',
          borderColor: isOwnBooking ? '#2563eb' : '#dc2626',
          extendedProps: booking,
        };
      });

      setEvents(formattedEvents);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const userBookings = useMemo(() => {
    if (!user) return [];
    return events.filter((event) => event.extendedProps?.userId === user.email);
  }, [events, user]);

  const handleDateClick = (selectInfo) => {
    const selected = new Date(selectInfo.dateStr);
    const now = new Date();
    selected.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if (selected < now) {
      toast({
        variant: 'destructive',
        title: 'Invalid Date',
        description: 'Cannot select a past date.',
      });
      return;
    }

    setSelectedDay(selectInfo.dateStr);
    setSelectedTime(null);
    setSelectedDateTime(null);
    setTimeout(() => {
      scrollToRef(timeSectionRef);
    }, 100);
  };

  const handleEventClick = (clickInfo) => {
    if (user && clickInfo.event.extendedProps.userId === user.email) {
      setBookingToDelete(clickInfo.event);
      setIsAlertOpen(true);
    } else {
      toast({
        title: 'Booking Information',
        description: 'This slot is reserved by another user.',
      });
    }
  };

  const handleDeleteBooking = async () => {
    if (!bookingToDelete) return;

    try {
      await fetch(`${API_BASE}/bookings/${bookingToDelete.id}`, {
        method: "DELETE",
        credentials: "include"
      });

      fetchBookings();
      setIsAlertOpen(false);
      setBookingToDelete(null);

      toast({
        title: '✅ Booking Cancelled',
      });

    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDateTime) {
      toast({
        variant: 'destructive',
        title: 'No Time Selected',
        description: 'Please select a time slot.',
      });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          labName: labNameFromState,
          start: selectedDateTime.start,
          duration
        })
      });

      if (!res.ok) throw new Error("Booking failed");

      fetchBookings();

      toast({
        title: '🎉 Booking Confirmed',
        description: `Lab: ${labNameFromState}`
      });

      setSelectedDay(null);
      setSelectedTime(null);
      setSelectedDateTime(null);

    } catch (err) {
      console.error(err);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Booking failed'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Slot - VirtualLab</title>
      </Helmet>

      <div className="pt-28 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30">
        <motion.div
          className="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 glass-effect rounded-xl shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-start">
            <Link to="/lab-access" className="text-blue-400 hover:text-blue-300 mb-4 flex items-center">
              <ChevronLeft className="w-5 h-5 mr-1" /> Back to Lab Selection
            </Link>
            <Button variant="destructive" onClick={async () => {
              const myBookings = events.filter(e => e.extendedProps?.userId === user.email);
              await Promise.all(myBookings.map(b =>
                fetch(`${API_BASE}/bookings/${b.id}`, {
                  method: "DELETE",
                  credentials: "include"
                })
              ));
              fetchBookings();
            }}>
              <Trash2 className="mr-2 w-4 h-4" /> Delete My Bookings ({userBookings.length})
            </Button>
          </div>

          <div className="text-center">
            <CalendarIcon className="mx-auto h-12 w-12 text-blue-400" />
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">Book a Lab Slot</h1>
            <p className="mt-1 text-sm text-gray-400">Click a date to begin</p>
          </div>

          <CalendarView
            onDateSelect={handleDateClick}
            onEventClick={handleEventClick}
            initialEvents={events}
          />

          {selectedDay && (
            <div ref={timeSectionRef} className="mt-8 p-6 bg-gray-800/50 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Select a Time Slot for {new Date(selectedDay).toDateString()}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map((time) => {
                  const start = new Date(`${selectedDay}T${time}:00`);
                  const end = new Date(start.getTime() + duration * 60 * 60 * 1000);
                  const isOverlapping = events.some((event) => new Date(event.start) < end && new Date(event.end) > start);

                  return (
                    <Button
                      key={time}
                      disabled={isOverlapping}
                      onClick={() => {
                        const now = new Date();
                        const isToday = new Date(selectedDay).toDateString() === now.toDateString();
                        if (isToday && start < now) {
                          toast({
                            variant: 'destructive',
                            title: 'Invalid Time',
                            description: 'You cannot book a time slot in the past.',
                          });
                          return;
                        }

                        setSelectedTime(time);
                        setSelectedDateTime({ start: start.toISOString(), end: end.toISOString() });
                        setTimeout(() => {
                          scrollToRef(confirmSectionRef);
                        }, 100);
                      }}
                      className={`text-white ${selectedTime === time ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                      {time}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          {selectedDateTime && (
            <motion.form
              ref={confirmSectionRef}
              onSubmit={handleSubmit}
              className="space-y-6 mt-8 p-6 bg-gray-800/50 rounded-lg"
            >
              <h2 className="text-xl font-semibold text-white text-center">Confirm Your Selection</h2>
              <div>
                <Label htmlFor="selectedSlot" className="text-sm font-medium text-gray-300 mb-1">Selected Start Time</Label>
                <Input
                  id="selectedSlot"
                  type="text"
                  readOnly
                  value={new Date(selectedDateTime.start).toLocaleString()}
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700/30 text-white cursor-not-allowed"
                />
              </div>
              <div>
                <Label htmlFor="duration" className="text-sm font-medium text-gray-300 mb-1">Duration (hours)</Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    min="1"
                    max="4"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                    className="pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700/50 text-white w-full"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-400">Max booking duration is 4 hours.</p>
              </div>
              <Button type="submit" className="w-full flex justify-center py-3 px-4 text-white bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 rounded-md">
                <CheckCircle className="w-5 h-5 mr-2" /> Confirm Booking for {labNameFromState}
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your booking for <span className="font-semibold text-gray-200">{bookingToDelete?.extendedProps.labName}</span> on <span className="font-semibold text-gray-200">{new Date(bookingToDelete?.start).toLocaleString()}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setBookingToDelete(null)}>Back</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteBooking} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <Trash2 className="w-4 h-4 mr-2" /> Yes, Cancel Booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BookSlotPage;
