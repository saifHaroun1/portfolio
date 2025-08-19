import 'package:entry/entry.dart';
import 'package:flutter/material.dart';

import '../../../extensions/context_ext.dart';
import '../../widgets/animated_cursor.dart';
import '../../widgets/nav_bar.dart';
import '../../widgets/section_title.dart';
import '../home/views/footer_view.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          AnimatedNavWrapper(
            child: Container(
              width: double.maxFinite,
              alignment: Alignment.center,
              padding: EdgeInsets.only(top: 200, left: 50, right: 50),
              constraints:
                  BoxConstraints(minHeight: MediaQuery.of(context).size.height),
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: 1024),
                child: Column(
                  children: [
                    SectionTitle(
                      backgroundText: "ABOUT",
                      foreGroundText: "A Brief History of Saif",
                      subTitle: "Bio",
                    ),
                    SizedBox(height: 140),
                    context.isTablet || context.isMobile
                        ? _mobileView(context)
                        : _largeView(context),
                  ],
                ),
              ),
            ),
          ),
          FooterView(),
        ],
      ),
    );
  }

  Widget _largeView(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Entry.offset(
          yOffset: -400,
          delay: Duration(milliseconds: 300),
          duration: Duration(seconds: 2),
          child: Container(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                radius: 0.6,
                colors: [
                  Theme.of(context).colorScheme.secondary,
                  Colors.white,
                ],
              ),
            ),
            child: Image.asset(
              'assets/images/project-images/photo_me.jpeg',
            ),
          ),
        ),
        SizedBox(width: 50),
        Expanded(
          child: Entry.offset(
            yOffset: 400,
            delay: Duration(milliseconds: 300),
            duration: Duration(seconds: 2),
            child: Padding(
              padding: const EdgeInsets.only(top: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Text(
                    "A BRIEF PROFILE OF Saif",
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                          fontFamily: "Goku",
                        ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    "Saif Haroun is a mobile application developer based in Egypt, specializing in Hybrid Mobile Apps Development using Flutter. As a dedicated freelancer, he continually seeks new opportunities to enhance his skills.",
                    style: Theme.of(context)
                        .textTheme
                        .bodyLarge
                        ?.copyWith(fontWeight: FontWeight.w500),
                  ),
                  SizedBox(height: 20),
                  Text(
                    "Acknowledging that he's on a journey of continuous improvement, Saif understands that his earlier projects may not fully reflect his current expertise. Nevertheless, he values the lessons learned from these experiences and views them as opportunities for growth.",
                    style: Theme.of(context)
                        .textTheme
                        .bodyLarge
                        ?.copyWith(fontWeight: FontWeight.w500),
                  ),
                  SizedBox(height: 20),
                  Text(
                    "In essence, Saif Haroun is a passionate developer committed to excellence. He understands that each project is a chance to become better, welcoming feedback and constructive criticism as stepping stones to further development.",
                    style: Theme.of(context)
                        .textTheme
                        .bodyLarge
                        ?.copyWith(fontWeight: FontWeight.w500),
                  ),
                ],
              ),
            ),
          ),
        )
      ],
    );
  }

  Column _mobileView(BuildContext context) {
    return Column(
      children: [
        Container(
          decoration: BoxDecoration(
            gradient: RadialGradient(
              radius: 0.6,
              colors: [
                Theme.of(context).colorScheme.secondary,
                Colors.white,
              ],
            ),
          ),
          child: Image.asset(
            'assets/images/me.png',
          ),
        ),
        SizedBox(height: 50),
        Text(
          "A BRIEF PROFILE OF Saif",
          style: Theme.of(context).textTheme.titleSmall?.copyWith(
                fontFamily: "Goku",
                fontSize: 18,
              ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 10),
        Text(
          "Saif Haroun is a mobile application developer based in Egypt, specializing in Hybrid Mobile Apps Development using Flutter. As a dedicated freelancer, he continually seeks new opportunities to enhance his skills.",
          style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                fontWeight: FontWeight.w400,
                fontSize: 12,
              ),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 20),
        Text(
          "Acknowledging that he's on a journey of continuous improvement, Saif understands that his earlier projects may not fully reflect his current expertise. Nevertheless, he values the lessons learned from these experiences and views them as opportunities for growth.",
          style: Theme.of(context)
              .textTheme
              .bodyMedium
              ?.copyWith(fontWeight: FontWeight.w500),
          textAlign: TextAlign.center,
        ),
        SizedBox(height: 20),
        Text(
          "In essence, Saif Haroun is a passionate developer committed to excellence. He understands that each project is a chance to become better, welcoming feedback and constructive criticism as stepping stones to further development.",
          style: Theme.of(context)
              .textTheme
              .bodyMedium
              ?.copyWith(fontWeight: FontWeight.w500),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
