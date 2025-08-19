enum JobType {
  fullTime,
  partTime,
  remote,
}

class Experience {
  final DateTime startDate;
  final DateTime endDate;
  final String company;
  final String position;
  final JobType type;
  final List<String> responsibilities;

  Experience({
    required this.company,
    required this.position,
    required this.responsibilities,
    required this.startDate,
    required this.endDate,
    this.type = JobType.fullTime,
  });

  static final List<Experience> ksExperiences = [
    Experience(
      company: "Smart Team",
      position: "Junior Flutter Developer",
      responsibilities: [
        "Collaborated with cross-functional teams (mobile, backend, UI/UX, QA) to deliver high-quality mobile apps for Al Souq Al Arabi.",
        "Ensured code quality and best practices by reviewing and maintaining clean, scalable Flutter code",
        "Supported team growth by mentoring interns and guiding junior developers in Dart & Flutter",
      ],
      startDate: DateTime(2025, 5),
      endDate: DateTime(2025, 8),
    ),
    Experience(
      company: "Freelance",
      position: "Flutter Developer",
      responsibilities: [
        "Developed cross-platform mobile and web application using Flutter.",
        "Designed and implemented modern, responsive UI for seamless user experience across devices",
        "Applied state management (e.g., Provider / BLoC) to ensure scalability and maintainability.",
        "Collaborated with client to gather requirements and deliver features on time"
      ],
      startDate: DateTime(2025, 3),
      endDate: DateTime(2025, 4),
    ),
    Experience(
      company: "Freelance",
      position: "Flutter Developer",
      responsibilities: [
        "Developed a multilingual Flutter Web application with support for dynamic language switching",
        "Implemented JSON-based localization to manage translations efficiently and enable easy scalability for additional languages.",
        "Ensured responsive design across different screen sizes for better user experience",
      ],
      startDate: DateTime(2025, 5),
      endDate: DateTime(2025, 6),
    ),
  ];
}
