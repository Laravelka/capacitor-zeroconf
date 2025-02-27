const { execSync } = require('child_process');

try {
  const javaVersion = execSync('java -version 2>&1').toString();
  console.log('Java version output:', javaVersion.split('\n')[0]);
  
  // Ищем версию в выводе
  const match = javaVersion.match(/version ['"]([\d.]+)/);
  if (!match) {
    console.error('Could not determine Java version');
    process.exit(1);
  }
  
  const version = match[1];
  console.log('Detected Java version:', version);
  
  // Проверяем основную версию
  const majorVersion = parseInt(version.split('.')[0]);
  if (majorVersion !== 17) {
    console.error('Warning: Java 17 is required!');
    console.error('Current version:', version);
    console.error('Please install Java 17 and make sure it is in your PATH');
    process.exit(1);
  }
  
  console.log('Java version check passed');
} catch (error) {
  console.error('Error checking Java version:', error.message);
  process.exit(1);
} 