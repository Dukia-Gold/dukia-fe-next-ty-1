export function getDeviceName(): string {
  const userAgent = navigator.userAgent;
  //   const deviceName = userAgent.match(
  //     /(iPhone|iPad|iPod|Android|Windows Phone|BlackBerry|Windows NT)/
  //   );
  return userAgent ? userAgent : "Unknown Device";
}
