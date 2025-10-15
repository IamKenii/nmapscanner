// Nmap Configuration
// valueType opties:
// - null: geen extra waarde nodig
// - "text": vrije tekst invoer
// - "number": numerieke invoer
// - "ip": IP adres invoer
// - "ports": poort specificatie

const nmapConfig = {
    "scanTypes": {
        "name": "Scan Types",
        "options": [
            {"flag": "-sS", "name": "-sS", "desc": "TCP SYN Scan (Stealth scan, standaard)", "valueType": null},
            {"flag": "-sT", "name": "-sT", "desc": "TCP Connect Scan (Volledige TCP verbinding)", "valueType": null},
            {"flag": "-sU", "name": "-sU", "desc": "UDP Scan (Scan UDP poorten)", "valueType": null},
            {"flag": "-sA", "name": "-sA", "desc": "TCP ACK Scan (Detecteer firewall regels)", "valueType": null},
            {"flag": "-sW", "name": "-sW", "desc": "TCP Window Scan", "valueType": null},
            {"flag": "-sM", "name": "-sM", "desc": "TCP Maimon Scan", "valueType": null},
            {"flag": "-sN", "name": "-sN", "desc": "TCP Null Scan", "valueType": null},
            {"flag": "-sF", "name": "-sF", "desc": "TCP FIN Scan", "valueType": null},
            {"flag": "-sX", "name": "-sX", "desc": "TCP Xmas Scan", "valueType": null},
            {"flag": "-sV", "name": "-sV", "desc": "Version Detection (Detecteer service versies)", "valueType": null},
            {"flag": "-sC", "name": "-sC", "desc": "Default Scripts (Voer standaard NSE scripts uit)", "valueType": null}
        ]
    },
    "hostDiscovery": {
        "name": "Host Discovery",
        "options": [
            {"flag": "-Pn", "name": "-Pn", "desc": "Skip Ping (Behandel alle hosts als online)", "valueType": null},
            {"flag": "-PS", "name": "-PS", "desc": "TCP SYN Ping (TCP SYN discovery)", "valueType": "ports", "placeholder": "22,80,443"},
            {"flag": "-PA", "name": "-PA", "desc": "TCP ACK Ping (TCP ACK discovery)", "valueType": "ports", "placeholder": "22,80,443"},
            {"flag": "-PU", "name": "-PU", "desc": "UDP Ping (UDP discovery)", "valueType": "ports", "placeholder": "53,161"},
            {"flag": "-PE", "name": "-PE", "desc": "ICMP Echo Ping (ICMP echo request)", "valueType": null},
            {"flag": "-PP", "name": "-PP", "desc": "ICMP Timestamp Ping", "valueType": null},
            {"flag": "-PM", "name": "-PM", "desc": "ICMP Netmask Ping", "valueType": null}
        ]
    },
    "portSpecification": {
        "name": "Port Specification",
        "options": [
            {"flag": "-p-", "name": "-p-", "desc": "All Ports (Scan alle 65535 poorten)", "valueType": null},
            {"flag": "-p", "name": "-p", "desc": "Custom Ports (Specifieke poorten of ranges)", "valueType": "ports", "placeholder": "80,443,8000-9000"},
            {"flag": "-F", "name": "-F", "desc": "Fast Scan (Scan 100 meest voorkomende poorten)", "valueType": null},
            {"flag": "--top-ports", "name": "--top-ports", "desc": "Top Ports (Scan top N poorten)", "valueType": "number", "placeholder": "100"},
            {"flag": "--port-ratio", "name": "--port-ratio", "desc": "Port Ratio (Scan poorten boven ratio)", "valueType": "number", "placeholder": "0.1"}
        ]
    },
    "timingPerformance": {
        "name": "Timing & Performance",
        "options": [
            {"flag": "-T0", "name": "-T0", "desc": "Paranoid (Extreem langzaam - IDS evasion)", "valueType": null},
            {"flag": "-T1", "name": "-T1", "desc": "Sneaky (Zeer langzaam)", "valueType": null},
            {"flag": "-T2", "name": "-T2", "desc": "Polite (Langzaam)", "valueType": null},
            {"flag": "-T3", "name": "-T3", "desc": "Normal (Standaard snelheid)", "valueType": null},
            {"flag": "-T4", "name": "-T4", "desc": "Aggressive (Snel - aanbevolen)", "valueType": null},
            {"flag": "-T5", "name": "-T5", "desc": "Insane (Zeer snel)", "valueType": null},
            {"flag": "--min-rate", "name": "--min-rate", "desc": "Minimum packets per seconde", "valueType": "number", "placeholder": "100"},
            {"flag": "--max-rate", "name": "--max-rate", "desc": "Maximum packets per seconde", "valueType": "number", "placeholder": "1000"},
            {"flag": "--min-parallelism", "name": "--min-parallelism", "desc": "Minimum parallelle probes", "valueType": "number", "placeholder": "10"},
            {"flag": "--max-parallelism", "name": "--max-parallelism", "desc": "Maximum parallelle probes", "valueType": "number", "placeholder": "100"},
            {"flag": "--host-timeout", "name": "--host-timeout", "desc": "Timeout per host", "valueType": "text", "placeholder": "30m"}
        ]
    },
    "osDetection": {
        "name": "OS & Service Detection",
        "options": [
            {"flag": "-O", "name": "-O", "desc": "OS Detection (Detecteer besturingssysteem)", "valueType": null},
            {"flag": "-A", "name": "-A", "desc": "Aggressive Scan (OS, versie, script, traceroute)", "valueType": null},
            {"flag": "--osscan-guess", "name": "--osscan-guess", "desc": "Guess OS (Agressiever OS detectie)", "valueType": null},
            {"flag": "--osscan-limit", "name": "--osscan-limit", "desc": "OS Scan Limit (Limiteer OS detectie)", "valueType": null},
            {"flag": "--version-intensity", "name": "--version-intensity", "desc": "Version Intensity (0-9)", "valueType": "number", "placeholder": "5"},
            {"flag": "--version-light", "name": "--version-light", "desc": "Light Version (Lichte versie detectie)", "valueType": null},
            {"flag": "--version-all", "name": "--version-all", "desc": "All Version (Probeer elke probe)", "valueType": null}
        ]
    },
    "nseScripts": {
        "name": "NSE Scripts",
        "options": [
            {"flag": "--script=default", "name": "--script=default", "desc": "Default Scripts (Standaard script set)", "valueType": null},
            {"flag": "--script=vuln", "name": "--script=vuln", "desc": "Vulnerability Scan (Bekende kwetsbaarheden)", "valueType": null},
            {"flag": "--script=exploit", "name": "--script=exploit", "desc": "Exploit Scripts", "valueType": null},
            {"flag": "--script=auth", "name": "--script=auth", "desc": "Auth Scripts (Authenticatie)", "valueType": null},
            {"flag": "--script=brute", "name": "--script=brute", "desc": "Brute Force Scripts", "valueType": null},
            {"flag": "--script=discovery", "name": "--script=discovery", "desc": "Discovery Scripts", "valueType": null},
            {"flag": "--script=dos", "name": "--script=dos", "desc": "DoS Scripts (Denial of Service)", "valueType": null},
            {"flag": "--script=malware", "name": "--script=malware", "desc": "Malware Detection (Detecteer malware)", "valueType": null},
            {"flag": "--script", "name": "--script", "desc": "Custom Script (Specifieke script naam)", "valueType": "text", "placeholder": "http-title,ssl-cert"},
            {"flag": "--script-args", "name": "--script-args", "desc": "Script Arguments", "valueType": "text", "placeholder": "user=admin,pass=test"}
        ]
    },
    "firewallEvasion": {
        "name": "Firewall/IDS Evasion",
        "options": [
            {"flag": "-f", "name": "-f", "desc": "Fragment Packets (Fragmenteer packets)", "valueType": null},
            {"flag": "--mtu", "name": "--mtu", "desc": "MTU Size (Aangepaste MTU grootte)", "valueType": "number", "placeholder": "24"},
            {"flag": "-D", "name": "-D", "desc": "Decoy Scan (Gebruik decoy IP's)", "valueType": "text", "placeholder": "RND:10 of ME,192.168.1.5"},
            {"flag": "-S", "name": "-S", "desc": "Spoof Source (Vervals bron IP)", "valueType": "ip", "placeholder": "192.168.1.100"},
            {"flag": "-e", "name": "-e", "desc": "Interface (Specifieke network interface)", "valueType": "text", "placeholder": "eth0"},
            {"flag": "--source-port", "name": "--source-port", "desc": "Source Port (Specifieke bron poort)", "valueType": "number", "placeholder": "53"},
            {"flag": "--data-length", "name": "--data-length", "desc": "Data Length (Append random data)", "valueType": "number", "placeholder": "200"},
            {"flag": "--randomize-hosts", "name": "--randomize-hosts", "desc": "Randomize Hosts (Randomiseer volgorde)", "valueType": null},
            {"flag": "--spoof-mac", "name": "--spoof-mac", "desc": "Spoof MAC (Vervals MAC adres)", "valueType": "text", "placeholder": "0 of AA:BB:CC:DD:EE:FF"},
            {"flag": "--badsum", "name": "--badsum", "desc": "Bad Checksum (Foute checksum voor evasion)", "valueType": null},
            {"flag": "--ttl", "name": "--ttl", "desc": "TTL Value (Stel IP TTL in)", "valueType": "number", "placeholder": "64"}
        ]
    },
    "output": {
        "name": "Output Options",
        "options": [
            {"flag": "-oN", "name": "-oN", "desc": "Normal Output (Normale output naar bestand)", "valueType": "text", "placeholder": "output.txt"},
            {"flag": "-oX", "name": "-oX", "desc": "XML Output", "valueType": "text", "placeholder": "output.xml"},
            {"flag": "-oG", "name": "-oG", "desc": "Grepable Output", "valueType": "text", "placeholder": "output.grep"},
            {"flag": "-oA", "name": "-oA", "desc": "All Formats (Output in alle formaten)", "valueType": "text", "placeholder": "output"},
            {"flag": "-v", "name": "-v", "desc": "Verbose (Uitgebreide output)", "valueType": null},
            {"flag": "-vv", "name": "-vv", "desc": "Very Verbose (Zeer uitgebreide output)", "valueType": null},
            {"flag": "-d", "name": "-d", "desc": "Debug Mode", "valueType": null},
            {"flag": "-dd", "name": "-dd", "desc": "More Debug (Meer debug info)", "valueType": null},
            {"flag": "--reason", "name": "--reason", "desc": "Show Reason (Toon reden voor poort status)", "valueType": null},
            {"flag": "--open", "name": "--open", "desc": "Only Open (Toon alleen open poorten)", "valueType": null},
            {"flag": "--packet-trace", "name": "--packet-trace", "desc": "Packet Trace (Toon packets)", "valueType": null},
            {"flag": "--append-output", "name": "--append-output", "desc": "Append Output (Voeg toe aan bestaand bestand)", "valueType": null}
        ]
    },
    "misc": {
        "name": "Miscellaneous Options",
        "options": [
            {"flag": "-6", "name": "-6", "desc": "IPv6 (Enable IPv6 scanning)", "valueType": null},
            {"flag": "-n", "name": "-n", "desc": "No DNS (Geen DNS resolutie)", "valueType": null},
            {"flag": "-R", "name": "-R", "desc": "Always DNS (Altijd DNS resolutie)", "valueType": null},
            {"flag": "--dns-servers", "name": "--dns-servers", "desc": "DNS Servers (Aangepaste DNS servers)", "valueType": "text", "placeholder": "8.8.8.8,1.1.1.1"},
            {"flag": "--traceroute", "name": "--traceroute", "desc": "Traceroute (Trace pad naar host)", "valueType": null},
            {"flag": "--privileged", "name": "--privileged", "desc": "Privileged Mode (Assume privileges)", "valueType": null},
            {"flag": "--unprivileged", "name": "--unprivileged", "desc": "Unprivileged Mode (Assume no privileges)", "valueType": null},
            {"flag": "-iL", "name": "-iL", "desc": "Input from File (Lees targets van bestand)", "valueType": "text", "placeholder": "targets.txt"},
            {"flag": "--exclude", "name": "--exclude", "desc": "Exclude Hosts (Exclusief hosts/netwerken)", "valueType": "text", "placeholder": "192.168.1.1"},
            {"flag": "--excludefile", "name": "--excludefile", "desc": "Exclude File (Exclusief hosts van bestand)", "valueType": "text", "placeholder": "exclude.txt"}
        ]
    }
};
