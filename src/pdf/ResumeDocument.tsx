import { Document, Page, View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import {
  profile,
  experience,
  projects,
  skills,
  education,
  certifications,
  references,
} from "../data/resume";
import { COLORS, FONT, PAGE } from "./theme";

const styles = StyleSheet.create({
  page: {
    fontFamily: FONT.base,
    fontSize: 9.7,
    color: COLORS.ink,
    paddingTop: PAGE.padding.top,
    paddingBottom: PAGE.padding.bottom,
    paddingLeft: PAGE.padding.left,
    paddingRight: PAGE.padding.right,
  },
  name: {
    fontFamily: FONT.bold,
    fontSize: 21,
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
  section: {
    marginTop: 13,
  },
  sectionTitle: {
    fontFamily: FONT.bold,
    fontSize: 10.5,
    letterSpacing: 1.2,
    color: COLORS.heading,
  },
  rule: {
    marginTop: 3,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.rule,
  },
  summaryText: {
    fontSize: 9.7,
    lineHeight: 1.45,
    color: COLORS.ink,
  },
  entry: {
    marginBottom: 9,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryTitle: {
    fontFamily: FONT.bold,
    fontSize: 10,
    color: COLORS.heading,
  },
  entryMeta: {
    marginTop: 1,
    fontSize: 9,
    color: COLORS.muted,
  },
  entryDate: {
    fontSize: 9,
    color: COLORS.muted,
    fontFamily: FONT.oblique,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 3,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 10,
    fontSize: 9.5,
    color: COLORS.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.42,
    color: COLORS.ink,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3.5,
  },
  skillCategory: {
    width: 168,
    fontFamily: FONT.bold,
    fontSize: 9.3,
    color: COLORS.heading,
  },
  skillItems: {
    flex: 1,
    fontSize: 9.3,
    color: COLORS.ink,
  },
  certGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  certCell: {
    width: "50%",
    marginBottom: 7,
    paddingRight: 10,
  },
  certName: {
    fontFamily: FONT.bold,
    fontSize: 9.4,
    color: COLORS.heading,
  },
  certMeta: {
    marginTop: 1,
    fontSize: 8.6,
    color: COLORS.muted,
  },
  refRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  refName: {
    fontFamily: FONT.bold,
    fontSize: 9.5,
    color: COLORS.heading,
  },
  refMeta: {
    fontSize: 9,
    color: COLORS.muted,
  },
});

function SectionTitle({ children }: { children: string }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{children}</Text>
      <View style={styles.rule} />
    </View>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

export function ResumeDocument() {
  const contactParts = [
    profile.location,
    profile.email,
    profile.phone,
    profile.linkedinLabel,
  ];

  return (
    <Document
      title={`${profile.name} — Resume`}
      author={profile.name}
      subject="Resume"
    >
      <Page size={PAGE.size} style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>
            {profile.role} — {profile.tagline}
          </Text>
          <Text style={styles.contactRow}>{contactParts.join("   |   ")}</Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <SectionTitle>Professional Summary</SectionTitle>
          <Text style={styles.summaryText}>{profile.summary}</Text>
        </View>

        {/* Core Skills */}
        <View style={styles.section}>
          <SectionTitle>Core Skills</SectionTitle>
          {skills.map((group) => (
            <View key={group.category} style={styles.skillRow}>
              <Text style={styles.skillCategory}>{group.category}</Text>
              <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <SectionTitle>Professional Experience</SectionTitle>
          {experience.map((job) => (
            <View key={`${job.company}-${job.role}`} style={styles.entry} wrap={false}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryTitle}>
                  {job.role} — {job.company}
                </Text>
                <Text style={styles.entryDate}>{job.period}</Text>
              </View>
              {job.points.map((point, i) => (
                <Bullet key={i} text={point} />
              ))}
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <SectionTitle>Selected Projects</SectionTitle>
          {projects.map((project) => (
            <View key={project.title} style={styles.entry} wrap={false}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryTitle}>
                  {project.title} — {project.org}
                </Text>
                <Text style={styles.entryDate}>{project.period}</Text>
              </View>
              <Text style={styles.entryMeta}>{project.summary}</Text>
              {project.points.map((point, i) => (
                <Bullet key={i} text={point} />
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <SectionTitle>Education</SectionTitle>
          {education.map((item) => (
            <View key={item.degree} style={{ marginBottom: 6 }}>
              <View style={styles.entryHeaderRow}>
                <Text style={styles.entryTitle}>{item.degree}</Text>
                <Text style={styles.entryDate}>{item.period}</Text>
              </View>
              <Text style={styles.entryMeta}>{item.school}</Text>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <SectionTitle>Certifications</SectionTitle>
          <View style={styles.certGrid}>
            {certifications.map((cert) => (
              <View key={cert.name} style={styles.certCell} wrap={false}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certMeta}>
                  {cert.issuer} · {cert.year}
                  {cert.credentialId ? ` · ID ${cert.credentialId}` : ""}
                </Text>
                {cert.credentialUrl ? (
                  <Link src={cert.credentialUrl} style={[styles.certMeta, { color: COLORS.accent }]}>
                    {cert.credentialUrl.replace(/^https?:\/\//, "")}
                  </Link>
                ) : null}
              </View>
            ))}
          </View>
        </View>

        {/* References */}
        <View style={styles.section}>
          <SectionTitle>References</SectionTitle>
          {references.map((ref) => (
            <View key={ref.name} style={styles.refRow}>
              <Text style={styles.refName}>{ref.name}</Text>
              <Text style={styles.refMeta}>
                {ref.role}, {ref.company} — available upon request
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default ResumeDocument;
