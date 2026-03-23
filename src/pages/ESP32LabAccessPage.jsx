import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Rnd } from 'react-rnd';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  FileText, Camera, Sliders, Activity, FileSearch, BarChart2, History, X
} from 'lucide-react';
import { API_BASE } from '@/config';

const tabs = [
  { key: 'define', name: 'Define Project', icon: <FileText className="w-5 h-5 mr-2" /> },
  { key: 'cam', name: 'ESP32 -CAM', icon: <Camera className="w-5 h-5 mr-2" /> },
  { key: 'controls', name: 'Controls', icon: <Sliders className="w-5 h-5 mr-2" /> },
  { key: 'sensor', name: 'Sensor Feedback', icon: <Activity className="w-5 h-5 mr-2" /> },
  { key: 'logs', name: 'Logs', icon: <FileSearch className="w-5 h-5 mr-2" /> },
  { key: 'report', name: 'Report', icon: <BarChart2 className="w-5 h-5 mr-2" /> },
  { key: 'history', name: 'History', icon: <History className="w-5 h-5 mr-2" /> },
];

const PiPModal = ({ title, children, isOpen, onClose }) => {
  const closeBtnRef = useRef(null);

  // Rnd props for touch, to avoid event swallowing
  // Also, handle click on close with both mouse and touch

  if (!isOpen) return null;

  return (
    <Rnd
      default={{ x: 50, y: 50, width: 360, height: 280 }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="z-50"
      dragHandleClassName="pip-drag-handle"
      enableUserSelectHack={false}
      style={{
        pointerEvents: 'auto',
        touchAction: 'none'
      }}
    >
      <div className="bg-gray-900 text-white rounded-lg h-full shadow-xl flex flex-col relative">
        <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-t-lg pip-drag-handle cursor-move select-none relative">
          <span className="text-sm font-semibold">{title}</span>
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close"
            onClick={e => {
              e.stopPropagation();
              if (onClose) onClose();
            }}
            onTouchEnd={e => {
              // Prevent drag from stealing touch end on close
              e.stopPropagation();
              if (onClose) onClose();
            }}
            className="p-1 rounded hover:bg-red-500 transition-all pointer-events-auto z-10"
            style={{ pointerEvents: 'auto', zIndex: 2 }}
            tabIndex={0}
          >
            <X className="w-4 h-4 text-gray-300 hover:text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-2">{children}</div>
      </div>
    </Rnd>
  );
};

const AccessLabPage = () => {
  const [activeTab, setActiveTab] = useState('define');
  const [pip, setPip] = useState({ cam: false, controls: false, logs: false });
  const [projectName, setProjectName] = useState('');
  const [controls, setControls] = useState([]);
  const [expectedOutput, setExpectedOutput] = useState('');
  const [sensors, setSensors] = useState('');
  const [platform, setPlatform] = useState('');
  const [file1, setFile1] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [savedProjects, setSavedProjects] = useState([]);
  const [logs, setLogs] = useState([]);
  const [report, setReport] = useState('');

  useEffect(() => {
    const projs = JSON.parse(localStorage.getItem('esp32Projects')) || [];
    setSavedProjects(projs.map((p, i) => ({ ...p, id: i })));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${API_BASE}/rented_serial`)
        .then(res => res.json())
        .then(data => {
          if (data.data) {
            setLogs(data.data.split('\n'));
          }
        });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (text) => {
    const now = new Date().toLocaleTimeString();
    setLogs(logs => [...logs, `[${now}] ${text}`]);
  };

  const downloadLogsPDF = () => {
    const doc = new jsPDF();
    doc.text('ESP32 Command Logs', 14, 20);
    doc.autoTable({
      head: [['#', 'Entry']],
      body: logs.map((l, i) => [i + 1, l]),
      startY: 30
    });
    doc.save('esp32-logs.pdf');
  };

  const handleTab = (key) => {
    if (key === 'cam' || key === 'controls' || key === 'logs') {
      setPip({ ...pip, [key]: true });
    } else {
      setActiveTab(key);
    }
  };

  const bodyStyles = "text-white space-y-4";

  return (
    <>
      <Helmet><title>Access ESP32 Lab</title></Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center gradient-text mb-10">ESP32 Lab Control Panel</h1>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map(t => (
              <Button
                key={t.key}
                variant={activeTab === t.key ? 'default' : 'outline'}
                onClick={() => handleTab(t.key)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-white"
              >
                {t.icon}{t.name}
              </Button>
            ))}
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6">
            {activeTab === 'define' && (
              <form onSubmit={e => e.preventDefault()} className={bodyStyles}>
                <input
                  className="w-full px-4 py-2 bg-gray-700 rounded"
                  placeholder="Project Name" value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                />
                {controls.map((c, i) => (
                  <div key={i} className="flex gap-2">
                    <input className="flex-1 px-2 py-1 bg-gray-700 rounded" value={c}
                      onChange={e => {
                        const arr = [...controls];
                        arr[i] = e.target.value;
                        setControls(arr);
                      }}
                    />
                    <Button variant="destructive" onClick={() => {
                      setControls(arr => arr.filter((_, j) => j !== i));
                    }}>Delete</Button>
                  </div>
                ))}
                <Button onClick={() => setControls(c => [...c, ''])}>Add Control</Button>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 rounded"
                  rows={2} placeholder="Expected Output" value={expectedOutput}
                  onChange={e => setExpectedOutput(e.target.value)}
                />
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 rounded"
                  rows={2} placeholder="Sensors to Monitor" value={sensors}
                  onChange={e => setSensors(e.target.value)}
                />
                <input type="file" onChange={e => setFile1(e.target.files[0])} />
                <select
                  className="w-full px-4 py-2 bg-gray-700 rounded"
                  value={platform} onChange={e => setPlatform(e.target.value)}
                >
                  <option value="">Select Platform</option>
                  <option value="arduino">Arduino</option>
                  <option value="espresso">Espresso</option>
                </select>
                <div className="flex justify-center">
                  <Button type="submit" onClick={() => {
                    const formData = new FormData();
                    formData.append("project_name", projectName);
                    controls.forEach(c => formData.append("controls", c));
                    formData.append("sensors", sensors);
                    if (file1) formData.append("code_file", file1);
                    fetch(`${API_BASE}/upload_project`, {
                      method: "POST",
                      body: formData
                    })
                      .then(res => res.json())
                      .then(data => {
                        setSuccessMessage("✅ Project uploaded and flashed!");
                        addLog(`📤 Uploaded: ${data.project}`);
                        setTimeout(() => setSuccessMessage(''), 4000);
                      })
                      .catch(() => setSuccessMessage("❌ Upload failed"));
                  }}>Upload to ESP32</Button>
                </div>
                {successMessage && <p className="text-green-400 text-center">{successMessage}</p>}
              </form>
            )}

            {activeTab === 'sensor' && (
              <div className={bodyStyles}>
                <h2 className="text-2xl text-center">📡 Sensor Feedback</h2>
                <p className="text-center text-gray-400">Live sensor data appears here.</p>
              </div>
            )}

            {activeTab === 'report' && (
              <div className={bodyStyles}>
                <h2 className="text-2xl text-center">📋 Verification Report</h2>
                <Button onClick={() => setReport(`Project: ${projectName}\nPlatform: ${platform}\nControls: ${controls.join(', ') || 'None'}\nExpected Output: ${expectedOutput}\nSensors: ${sensors}\nLog Entries: ${logs.length}\nTimestamp: ${new Date().toLocaleString()}`)}>Generate Report</Button>
                {report && <pre className="bg-gray-900 p-3 rounded whitespace-pre-wrap">{report}</pre>}
                {report && (
                  <div className="flex justify-center gap-3">
                    <Button onClick={() => {
                      const blob = new Blob([report], { type: 'text/plain' });
                      const a = document.createElement('a');
                      a.href = URL.createObjectURL(blob);
                      a.download = 'report.txt';
                      a.click();
                    }}>Download TXT</Button>
                    <Button onClick={() => {
                      const doc = new jsPDF();
                      doc.text('Verification Report', 14, 20);
                      doc.setFontSize(10);
                      doc.text(doc.splitTextToSize(report, 180), 14, 30);
                      doc.save('report.pdf');
                    }}>Download PDF</Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div className={bodyStyles}>
                <h2 className="text-2xl text-center">📜 Project History</h2>
                {savedProjects.length === 0 ? (
                  <p className="text-gray-400 text-center">No history yet.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedProjects.map(p => (
                      <div key={p.id} className="bg-gray-900 p-4 rounded">
                        <h3 className="font-semibold">{p.projectName}</h3>
                        <p className="text-sm text-gray-400">{new Date(p.savedAt).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <PiPModal title="📷 ESP32‑CAM View" isOpen={pip.cam} onClose={() => setPip(p => ({...p, cam:false}))}>
        <img src={`${API_BASE}/video_feed`} alt="Live Camera" className="w-full h-full object-contain" />
      </PiPModal>

      <PiPModal title="🎮 Controls Panel" isOpen={pip.controls} onClose={() => setPip(p => ({...p, controls:false}))}>
        <div className="text-white space-y-6">
          <h2 className="text-xl font-semibold text-center">⚙️ Control Buttons</h2>
          <p className="text-sm text-gray-300 text-center">Use the button below to send a reset command to the ESP32 device.</p>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                fetch(`${API_BASE}/trigger_control`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ control: "reset", state: "high" })
                })
                  .then(res => res.json())
                  .then(data => {
                    alert(data.status === "success" ? "Reset Sent" : "Failed");
                    addLog(`🔄 Reset: ${data.command} => ${data.response}`);
                  })
                  .catch(() => alert("Request failed"));
              }}
            >
              🔄 Reset
            </Button>
          </div>
        </div>
      </PiPModal>

      <PiPModal title="🧾 Live Logs" isOpen={pip.logs} onClose={() => setPip(p => ({...p, logs:false}))}>
        <div className="font-mono text-green-400 text-sm whitespace-pre-wrap">
          {logs.length > 0 ? logs.join('\n') : 'No logs yet.'}
        </div>
        <div className="mt-2 text-center">
          <Button onClick={downloadLogsPDF}>Download Log</Button>
        </div>
      </PiPModal>
    </>
  );
};

export default AccessLabPage;