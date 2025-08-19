class Project {
  final List<String> pngPaths;
  final String name;
  final String description;
  final String languageFramework;
  final String availablePlatforms;
  final String? features;
  final String stateManagement;
  final List<String> links;
  Project({
    required this.pngPaths,
    required this.name,
    required this.description,
    this.languageFramework = "Dart/Flutter",
    this.availablePlatforms = "Android, iOS",
    this.stateManagement = "Bloc",
    this.features,
    this.links = const [],
  }) : assert(pngPaths.isNotEmpty);
}

final List<Project> kProjects = [
  Project(
    pngPaths: [
      "assets/images/project-images/soaq_arabi1.png",
      for (int i = 2; i <= 17; i++)
        "assets/images/project-images/soaq_arabi_${i}.jpeg",
    ],
    name: "Soaq_Arabi",
    description:
        " Soaq Arabi is a mobile application that allows users to buy and sell products online. It features a user-friendly interface, secure payment options, and a wide range of categories for products.",
    links: [
      "https://play.google.com/store/apps/details?id=com.openwasit.users",
    ],
  ),
  Project(
      pngPaths: [
        "assets/images/project-images/metro_app_1.png",
        for (int i = 1; i <= 9; i++)
          "assets/images/project-images/metro_app_$i.jpg",
      ],
      links: [
        "https://github.com/saifHaroun1/Metro_App_DEPI",
      ],
      name: "Metro_App",
      description:
          "Metro App is a comprehensive public transportation companion designed to make commuting easier and more efficient. The app provides real-time metro schedules, route planning, station information, and live notifications for delays or changes. Users can also view interactive maps, track their trips, and get estimated arrival times. The app is built with Flutter, offering a smooth, responsive interface for both Android and iOS devices."),
  Project(
    pngPaths: [
      "assets/images/project-images/bookly_1.png",
      for (int i = 1; i <= 6; i++)
        "assets/images/project-images/bookly_${i}.jpeg",
    ],
    name: "bookly_app",
    description:
        "Bookly is a mobile application that allows users to search, read, and manage their book collections. It features a user-friendly interface, personalized recommendations, and the ability to track reading progress.",
    links: [
      "https://github.com/saifHaroun1/bookly_app",
    ],
  ),
  Project(
    pngPaths: [
      "assets/images/project-images/notes_app_1.png",
      for (int i = 1; i <= 3; i++)
        "assets/images/project-images/notes_app_${i}.jpg",
    ],
    name: "Notes_App",
    description: "To-do manager with local database (SQLite/Hive)",
    links: [
      "https://github.com/saifHaroun1/notes_app",
    ],
  ),
];
