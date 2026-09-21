import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { profile } from "../data/resume";
import { COLORS, FONT, PAGE } from "./theme";

const styles = StyleSheet.create({
  page: {
    fontFamily: FONT.base,
    fontSize: 10.2,
    color: COLORS.ink,
    paddingTop: PAGE.padding.top,
    paddingBottom: PAGE.padding.bottom,
    paddingLeft: PAGE.padding.left,
    paddingRight: PAGE.padding.right,
  },
  name: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: COLORS.heading,
  },
  role: {
    marginTop: 2,
    fontSize: 10.5,
    fontFamily: FONT.bold,
    color: COLORS.accent,
  },
  contactRow: {
    marginTop: 6,
    fontSize: 9,
    color: COLORS.muted,
  },
  rule: {
    marginTop: 10,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.rule,
  },
  date: {
    fontSize: 9.5,
    color: COLORS.muted,
    marginBottom: 16,
  },
  salutation: {
    fontSize: 10.2,
    color: COLORS.ink,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 10.2,
    lineHeight: 1.55,
    color: COLORS.ink,
    marginBottom: 12,
    textAlign: "justify",
  },
  closing: {
    marginTop: 8,
    fontSize: 10.2,
    color: COLORS.ink,
  },
  signature: {
    marginTop: 30,
    fontFamily: FONT.bold,
    fontSize: 10.5,
    color: COLORS.heading,
  },
  signatureRole: {
    marginTop: 1,
    fontSize: 9,
    color: COLORS.muted,
  },
});

function formatToday() {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function CoverLetterDocument() {
  const contactParts = [
    profile.location,
    profile.email,
    profile.phone,
    profile.linkedinLabel,
  ];

  return (
    <Document
      title={`${profile.name} — Cover Letter`}
      author={profile.name}
      subject="Cover Letter"
    >
      <Page size={PAGE.size} style={styles.page}>
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>
            {profile.role} — {profile.tagline}
          </Text>
          <Text style={styles.contactRow}>{contactParts.join("   |   ")}</Text>
        </View>
        <View style={styles.rule} />

        <Text style={styles.date}>{formatToday()}</Text>

        <Text style={styles.salutation}>Dear Hiring Manager,</Text>

        <Text style={styles.paragraph}>
          I am writing to express my interest in System / Infrastructure Engineering
          opportunities where I can apply my hands-on experience in enterprise Linux
          administration, Oracle systems, and virtualization. As a {profile.role} at
          Express System Limited, I support mission-critical SPARC, X-Series, Exadata,
          and Private Cloud Appliance (PCA) environments for banking and telecom
          clients across a 24x7 on-call rotation, with a track record of reliable
          uptime and structured incident handling.
        </Text>

        <Text style={styles.paragraph}>
          In this role, I have administered Oracle Solaris environments on SPARC
          infrastructure, managed ZFS storage pools with snapshot and replication
          strategies, and led OS deployment and patch configuration for an Oracle
          Database Appliance X11 high-availability cluster at NRB Bank. My technical
          foundation spans storage (LVM, RAID, Multipath), networking (bonding, VLAN,
          DNS), and security hardening (SELinux, SSH, OpenSSL), reinforced by
          certifications including the Red Hat Certified System Administrator (RHCSA),
          Oracle Cloud Infrastructure Certified Foundations Associate, and MySQL
          Implementation Certified Associate.
        </Text>

        <Text style={styles.paragraph}>
          I take pride in clear escalation, careful log analysis, and thorough
          documentation under pressure, and I am eager to bring that same rigor to a
          team that values operational excellence. I would welcome the opportunity to
          discuss how my background in enterprise systems support can contribute to
          your organization&apos;s infrastructure goals.
        </Text>

        <Text style={styles.paragraph}>
          Thank you for your time and consideration. I look forward to the possibility
          of speaking further.
        </Text>

        <Text style={styles.closing}>Sincerely,</Text>
        <Text style={styles.signature}>{profile.name}</Text>
        <Text style={styles.signatureRole}>
          {profile.email}   |   {profile.phone}
        </Text>
      </Page>
    </Document>
  );
}

export default CoverLetterDocument;
