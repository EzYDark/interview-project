import { CapacitorConfig } from '@capacitor/cli';
import os from 'os';

// Function to get the IP address
const getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  const ipAddresses: string[] = [];

  for (const iface of Object.values(interfaces)) {
    if (!iface) continue; // Skip over undefined values

    for (const alias of iface) {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        ipAddresses.push(alias.address);
      }
    }
  }

  // Sort IP addresses based on the first octet in descending order
  ipAddresses.sort((a, b) => {
    const firstOctetA = parseInt(a.split('.')[0]);
    const firstOctetB = parseInt(b.split('.')[0]);
    return firstOctetB - firstOctetA;
  });

  // Output the first IP address to the console
  console.log("\n√ Selected IP Address: " + ipAddresses[0] + "\n");
  return ipAddresses[0] || '0.0.0.0';
};


const config: CapacitorConfig = {
  appId: 'com.ezy.weather',
  appName: 'ezWeather',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    "url": `http://${getIPAddress()}:5173`,
    "cleartext": true
  }
};

export default config;
