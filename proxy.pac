function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.collaborate.center"))
    return "PROXY 192.168.68.41:8888";

  // DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
  return "DIRECT";
}
