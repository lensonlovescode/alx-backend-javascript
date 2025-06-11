process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const Name = process.stdin.read();
  if (Name) {
    process.stdout.write('Your name is: ' + Name);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
