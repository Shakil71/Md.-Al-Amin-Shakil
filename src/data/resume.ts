import { basePath } from "@/lib/basePath";

export const profile = {
  name: "Md. Al Amin Shakil",
  initials: "AS",
  role: "Junior System Engineer",
  tagline: "Enterprise Linux, Oracle & Virtualization",
  location: "Dhaka, Bangladesh",
  email: "mdalaminshakil31@gmail.com",
  phone: "+8801557114072",
  linkedin: "https://linkedin.com/in/md-al-amin-shakil",
  linkedinLabel: "linkedin.com/in/md-al-amin-shakil",
  resumeFile: `${basePath}/Md_Al_Amin_Shakil_Resume.pdf`,
  photo: `${basePath}/images/profile.jpg`,
  summary:
    "Junior System Engineer with hands-on experience across Linux administration, Oracle enterprise systems, and virtualization. Skilled in monitoring and troubleshooting Exadata, SPARC/X-Series, and Private Cloud Appliance (PCA) environments for banking and telecom clients. Strong in OS deployment and upgrades, storage (LVM/RAID/Multipath), networking (bonding/VLAN/DNS), SSL/TLS, and security hardening. Known for reliable 24x7 support, log analysis, and structured incident handling.",
};

export const highlights = [
  { label: "Years in enterprise IT", value: "2+" },
  { label: "On-call support", value: "24x7" },
  { label: "Client sectors", value: "Banking & Telecom" },
  { label: "Certifications", value: "3" },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Junior System Engineer",
    company: "Express System Limited",
    period: "Sep 2024 — Present",
    points: [
      "Provide enterprise support on SPARC and X-Series Oracle systems for banking and telecom clients; participate in 24x7 on-call rotation.",
      "Monitor PCA, Exadata, and SPARC servers to detect anomalies via log/metric review; perform first-line diagnostics and escalate with context.",
      "Triage and remediate customer issues, coordinating with internal teams and vendors for timely resolution.",
      "Administered Oracle Solaris environments on SPARC infrastructure, managing ZFS file systems and configuring network interfaces to ensure high availability for mission-critical banking applications.",
      "Provisioned and managed Solaris Zones to isolate application environments, optimizing resource utilization across SPARC T-Series servers.",
      "Configured ZFS storage pools and datasets, implementing snapshots and replication strategies to ensure data integrity and rapid recovery.",
    ],
  },
  {
    role: "IT Support Engineer",
    company: "Cubix Technology",
    period: "Mar 2024 — Jun 2024",
    points: [
      "Supported hotel management software and databases; delivered client support, hardware/software setup, and network monitoring.",
      "Configured client environments and resolved user issues to improve system stability; produced operational reports.",
      "Implemented network monitoring solutions, identifying and resolving potential connectivity issues before they impacted hotel operations.",
    ],
  },
  {
    role: "IT Executive",
    company: "Pacifist Corporation Group",
    period: "Sep 2023 — Feb 2024",
    points: [
      "Administered domain/server controls and DNS; executed scheduled server updates to improve uptime.",
      "Streamlined deployment and maintenance processes to enhance availability for enterprise applications.",
      "Established robust server update schedules and DNS administration, significantly enhancing enterprise application availability.",
    ],
  },
];

export type ProjectEntry = {
  title: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const projects: ProjectEntry[] = [
  {
    title: "Oracle Database Appliance X11 High Availability",
    org: "NRB Bank",
    period: "Apr 2026 — Jun 2026",
    summary:
      "High-availability OS deployment and patching for an Oracle Database Appliance X11 cluster supporting mission-critical banking workloads.",
    points: [
      "OS install and configuration of Oracle Linux 8 on ODA X11 for the HA cluster.",
      "Patch configuration of Oracle Exadata and ODA X11 to ensure system stability and security.",
      "Network setup and HA configuration for Oracle RAC across both DC and DR sites.",
    ],
    tags: ["Oracle Linux 8", "ODA X11", "Oracle RAC", "HA/DR", "Exadata Patching"],
  },
  {
    title: "Virtual Machine Setup",
    org: "Express System Limited",
    period: "Sep 2025 — Nov 2025",
    summary:
      "Automated provisioning system for cloud-based virtual machines, standardizing deployment across multiple environments and DevOps pipelines.",
    points: [
      "Devised an automated provisioning system for cloud-based VMs, enabling rapid scaling and standardized deployment configurations.",
      "Unified provisioning processes and ensured consistent environment configurations across diverse platforms.",
      "Centralized environment management and facilitated seamless integration with existing DevOps pipelines.",
      "Architected secure deployments using VMware ESXi, Oracle VM, KVM/libvirt, and Microsoft Hyper-V.",
      "Modernized security protocols, minimizing vulnerability exposure and aligning with compliance standards.",
      "Refined monitoring and alerting mechanisms to reduce downtime risk and support service reliability.",
    ],
    tags: ["VMware ESXi", "Oracle VM", "KVM/libvirt", "Hyper-V", "DevOps"],
  },
  {
    title: "RDP Setup",
    org: "Inovi Solutions",
    period: "Jul 2025 — Oct 2025",
    summary:
      "Robust Remote Desktop Protocol setup enabling secure, high-performance remote access for distributed teams.",
    points: [
      "Engineered a robust RDP setup, strengthening security protocols and optimizing performance for distributed teams.",
      "Integrated multi-factor authentication, minimizing unauthorized access risks and bolstering compliance.",
      "Centralized policy enforcement for configuration management, ensuring consistent security updates.",
      "Incorporated automated monitoring tools for proactive vulnerability detection and swift incident response.",
    ],
    tags: ["RDP", "MFA", "Security Hardening", "Monitoring"],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Operating Systems",
    items: ["Oracle Linux", "RHEL", "CentOS", "Ubuntu Server/Desktop"],
  },
  {
    category: "Oracle Solaris & Virtualization",
    items: [
      "Solaris 10/11 Administration",
      "ZFS Storage Management",
      "Solaris Zones/Containers",
      "LDOM Management",
      "SMF Configuration",
    ],
  },
  {
    category: "System Administration",
    items: [
      "Installation & Configuration",
      "OS & Kernel Upgrades",
      "systemd",
      "journald",
      "Performance Triage",
    ],
  },
  {
    category: "Storage",
    items: [
      "LVM (PV/VG/LV, Resize, Snapshots)",
      "mdadm RAID (0/1/5/10)",
      "ext4/xfs/btrfs",
      "iSCSI",
      "Multipath",
    ],
  },
  {
    category: "Networking",
    items: [
      "NIC Teaming/Bonding (802.3ad)",
      "VLANs",
      "IPv4/IPv6",
      "Static Routes",
      "Firewall (firewalld/ufw/iptables)",
      "DNS (BIND)",
    ],
  },
  {
    category: "Virtualization Platforms",
    items: ["VMware ESXi", "Oracle VM", "KVM/libvirt", "Microsoft Hyper-V"],
  },
  {
    category: "Security",
    items: [
      "SELinux/AppArmor",
      "SSH Hardening",
      "auditd",
      "OpenSSL (CSR, Self-signed, Renewal)",
    ],
  },
  {
    category: "Monitoring & Databases",
    items: [
      "Log Analysis (journalctl/rsyslog)",
      "Snapshots/rsync Backups",
      "Nagios/Zabbix/Prometheus",
      "Oracle Database (11g/19c)",
      "MySQL Administration",
    ],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "East West University",
    period: "2019 — 2023",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Rajuk Uttara Model College",
    period: "2017",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Ispahani Public School & College, Comilla",
    period: "2015",
  },
];

export type CertificationEntry = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: CertificationEntry[] = [
  {
    name: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    name: "MySQL Implementation Certified Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    name: "Ethical Hacker",
    issuer: "Team Matrix (Elite Hackers)",
    year: "2022",
  },
];

export type ReferenceEntry = {
  name: string;
  role: string;
  company: string;
};

export const references: ReferenceEntry[] = [
  {
    name: "Md. Tariquzzaman",
    role: "Manager",
    company: "Express System Limited",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
