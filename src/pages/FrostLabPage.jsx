import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Rnd } from 'react-rnd';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  FileText, Camera, Sliders, Activity, FileSearch, BarChart2, History, X
} from 'lucide-react';

const tabs = [
  { key: 'define', name: 'Define Project', icon: <FileText className="w-5 h-5 mr-2" /> },
  { key: 'cam', name: 'ESP32‑CAM', icon: <Camera className="w-5 h-5 mr-2" /> },
  { key: 'controls', name: 'Controls', icon: <Sliders className="w-5 h-5 mr-2" /> },
  { key: 'sensor', name: 'Sensor Feedback', icon: <Activity className="w-5 h-5 mr-2" /> },
  { key: 'logs', name: 'Logs', icon: <FileSearch className="w-5 h-5 mr-2" /> },
  { key: 'report', name: 'Report', icon: <BarChart2 className="w-5 h-5 mr-2" /> },
  { key: 'history', name: 'History', icon: <History className="w-5 h-5 mr-2" /> },
];

const PiPModal = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Rnd
      default={{ x: 50, y: 50, width: 360, height: 280 }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="z-50"
      dragHandleClassName="drag-handle"
      enableUserSelectHack={false} // ✅ Fixes mobile touch issue
    >
      <div className="bg-gray-900 text-white rounded-lg h-full shadow-xl flex flex-col">
        {/* ✅ Entire top bar is draggable */}
        <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-t-lg drag-handle cursor-move">
          <span className="text-sm font-semibold">{title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-1 rounded hover:bg-red-500 transition-all pointer-events-auto" // ✅ Ensures button is tappable
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

  const generateReport = () => {
    const txt = `
ESP32 Lab Verification Report
-----------------------------
Project: ${projectName}
Platform: ${platform}
Controls: ${controls.join(', ') || 'None'}
Expected Output: ${expectedOutput}
Sensors: ${sensors}
Log Entries: ${logs.length}
Timestamp: ${new Date().toLocaleString()}
`.trim();
    setReport(txt);
    addLog('Generated report');
  };

  const downloadTxt = () => {
    const blob = new Blob([report], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'report.txt';
    a.click();
  };

  const downloadReportPDF = () => {
    const doc = new jsPDF();
    doc.text('Verification Report', 14, 20);
    doc.setFontSize(10);
    doc.text(doc.splitTextToSize(report, 180), 14, 30);
    doc.save('report.pdf');
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
      <Helmet><title>Access FROST Lab</title></Helmet>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center gradient-text mb-10">FROST Lab Control Panel</h1>
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
                <h2 className="text-2xl text-center">📝 Define Project</h2>
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
                 
                 <div>
              <label className="block mb-1 font-semibold">Load Saved Project</label>
              <select onChange={(e) => loadSavedProject(e.target.value)} className="w-full px-4 py-2 bg-gray-700 rounded-lg">
                <option value="">Select a saved project</option>
                {savedProjects.map((p) => (
                  <option key={p.id} value={p.id}>{p.projectName} ({new Date(p.savedAt).toLocaleString()})</option>
                ))}
              </select>
            </div>


                <div className="flex justify-center">
                  <Button type="submit" onClick={() => {
                    const projs = JSON.parse(localStorage.getItem('esp32Projects')) || [];
                    projs.push({ projectName, controls, expectedOutput, sensors, platform, file1Name: file1?.name, savedAt: Date.now() });
                    localStorage.setItem('esp32Projects', JSON.stringify(projs));
                    setSavedProjects(projs.map((p, i) => ({ ...p, id: i })));
                    setSuccessMessage('✅ Saved!');
                    addLog(`Saved project ${projectName}`);
                    setTimeout(() => setSuccessMessage(''), 4000);
                  }}>Save Project</Button>
                </div>

                {successMessage && (
                  <p className="text-green-400 text-center">{successMessage}</p>
                )}
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
                <Button onClick={generateReport}>Generate Report</Button>
                {report && <pre className="bg-gray-900 p-3 rounded whitespace-pre-wrap">{report}</pre>}
                {report && (
                  <div className="flex justify-center gap-3">
                    <Button onClick={downloadTxt}>Download TXT</Button>
                    <Button onClick={downloadReportPDF}>Download PDF</Button>
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

      {/* PiP Modals */}
      <PiPModal title="📷 ESP32‑CAM View" isOpen={pip.cam} onClose={() => setPip(p => ({...p, cam:false}))}>
        {/* Replace with actual live feed component when available */}
        <div className="w-full h-full bg-black flex items-center justify-center text-gray-400">
          Live Camera Feed
        </div>
      </PiPModal>

      <PiPModal
  title="🎮 Controls Panel"
  isOpen={pip.controls}
  onClose={() => setPip((p) => ({ ...p, controls: false }))}
>
  <div className="text-white space-y-6">
    <h2 className="text-xl font-semibold text-center">⚙️ Control Buttons</h2>
    <p className="text-sm text-gray-300 text-center">
      Use the button below to send a reset command to the ESP32 device.
    </p>

    <div className="flex justify-center">
      <Button
        onClick={() => {
          alert('🧠 Device Reset Triggered!');
          addLog('🔄 Device Reset triggered from Controls');
        }}
        className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 rounded-lg text-sm font-semibold"
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
