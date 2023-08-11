export const PORT: number = 3000;

export function SERVER_LISTENING_MESSAGE(port: number): string {
  return `Server Is Listening On Port: http://localhost:${port}`;
}
