import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  // Single graphics card driver versions
  const driverVersions = [
    {
      id: 1,
      version: '546.33',
      releaseDate: '2024-03-25',
      size: '768 MB',
      type: 'Game Ready',
      changes: [
        'DLSS 3.5 support',
        'Fixed memory leak in Vulkan applications',
        'Performance improvements in DX12 games',
        'New encoder features for streamers'
      ],
      minRequirements: {
        os: ['Windows 10 64-bit', 'Windows 11'],
        cpu: 'Intel/AMD 64-bit processor',
        ram: '4GB'
      },
      sha256: 'e7c41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4dd'
    },
    {
      id: 2,
      version: '546.29',
      releaseDate: '2024-03-10',
      size: '765 MB',
      type: 'Studio',
      changes: [
        'Optimized for Adobe Creative Suite 2024',
        'CUDA 12.4 support',
        'Bug fixes for multi-display setups',
        'Improved power management'
      ],
      minRequirements: {
        os: ['Windows 10 64-bit', 'Windows 11'],
        cpu: 'Intel/AMD 64-bit processor',
        ram: '4GB'
      },
      sha256: '8f2e41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4ff'
    },
    {
      id: 3,
      version: '546.01',
      releaseDate: '2024-02-28',
      size: '762 MB',
      type: 'Game Ready',
      changes: [
        'Support for Dragon\'s Dogma 2',
        'Ray tracing optimizations',
        'Fixed GPU utilization reporting',
        'Updated NVENC encoder'
      ],
      minRequirements: {
        os: ['Windows 10 64-bit', 'Windows 11'],
        cpu: 'Intel/AMD 64-bit processor',
        ram: '4GB'
      },
      sha256: 'a9c41d726b2421b1092c6d0850c1a3c558468507a12951c51d89c3f86d95c4e1'
    }
  ];

  const downloadDriver = (version) => {
    setMessage('Phong ngu, Fuck Me!!!');
  };

  return (
    <div className="container">
      <header>
        <h1>NVIDIA RTX 40 Series Driver Hub</h1>
      </header>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <main>
        <div className="versions-list">
          {driverVersions.map(driver => (
            <div key={driver.id} className="version-item">
              <div className="version-header">
                <h3>v{driver.version} ({driver.type})</h3>
                <span className="date">{driver.releaseDate}</span>
              </div>
              
              <div className="version-details">
                <div className="metadata">
                  <code>Size: {driver.size}</code>
                  <code>SHA256: {driver.sha256}</code>
                </div>

                <div className="changes">
                  <h4>Changes:</h4>
                  <ul>
                    {driver.changes.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </div>

                <div className="requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    <li>OS: {driver.minRequirements.os.join(' / ')}</li>
                    <li>CPU: {driver.minRequirements.cpu}</li>
                    <li>RAM: {driver.minRequirements.ram}</li>
                  </ul>
                </div>

                <button 
                  onClick={() => downloadDriver(driver.version)}
                  className="download-btn"
                >
                  Download v{driver.version}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Remember to backup your system before updating drivers</p>
      </footer>
    </div>
  )
}

export default App
