import 'package:flutter/material.dart';

class Constants {
  static const Duration smallDelay = Duration(milliseconds: 1500);
  static const Duration mediumDelay = Duration(milliseconds: 3000);

  static const mediumAnimationSpeed = Duration(milliseconds: 400);

  static const email = 'saif_h06999@cic-cairo.com';
  static const phoneNumber = '+20 1110064015';
  static const address = 'Giza, Egypt';

  static const linkedInUrl =
      'https://www.linkedin.com/in/saif-haroun-711b482a1/';
  static const xUrl =
      'https://x.com/haroun_Saif1?t=CZN5xPongi_Q55R1soEtgA&s=09';
  static const githubUrl = 'https://github.com/saifHaroun1';
  static const resumeURl =
      'https://drive.google.com/file/d/1IINYRi7SqhdHoxpak9vBK0w9pZds18a4/view?usp=drive_link';

  static outLinedText(BuildContext context, {double strokeWidth = 1}) {
    return Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = strokeWidth
      ..color = Theme.of(context).colorScheme.secondary;
  }
}
