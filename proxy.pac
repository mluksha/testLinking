function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "mluksha.github.io"))
    return "DIRECT";

  if (shExpMatch(host, "*.onliner.by"))
    return "DIRECT";

  if (shExpMatch(host, "*.collaborate.center"))
    return "DIRECT";

  // DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
  return "PROXY 192.168.68.41:8888";
}
