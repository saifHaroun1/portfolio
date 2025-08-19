class RecentWork {
  final String title;
  final String imagePath;
  final String? playStoreUrl;
  final String? gitHubUrl;
  final String? appStoreUrl;
  RecentWork({
    required this.title,
    required this.imagePath,
    this.playStoreUrl,
    this.gitHubUrl,
    this.appStoreUrl,
  });

  static final List<RecentWork> works = [
    RecentWork(
      title: "Soaq_Arabi",
      imagePath: "assets/images/project-images/soaq_arabi1.png",
      playStoreUrl:
          "https://play.google.com/store/apps/details?id=com.openwasit.users",
    ),
    RecentWork(
      title: "Metro_App",
      imagePath: "assets/images/project-images/metro_app_1.png",
    ),
  ];
}
