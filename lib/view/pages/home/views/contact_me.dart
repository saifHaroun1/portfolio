import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../../extensions/context_ext.dart';
import '../../../router/routes.dart';
import '../../../widgets/dotted_decoration.dart';
import '../../../widgets/section_title.dart';

class ContactMeView extends StatefulWidget {
  const ContactMeView({super.key});

  @override
  State<ContactMeView> createState() => _ContactMeViewState();
}

class _ContactMeViewState extends State<ContactMeView> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 300),
        SectionTitle(
          backgroundText: "Contact",
          foreGroundText: "Contact Me",
          subTitle: "GO AHEAD!",
        ),
        SizedBox(height: 200),
        _ContactMeCard(),
      ],
    );
  }
}

class _ContactMeCard extends StatefulWidget {
  @override
  State<_ContactMeCard> createState() => _ContactMeCardState();
}

class _ContactMeCardState extends State<_ContactMeCard> {
  bool isHovering = false;
  @override
  Widget build(BuildContext context) {
    final circleWidth = MediaQuery.of(context).size.width < 500
        ? MediaQuery.of(context).size.width - 50
        : 500.0;
    return GestureDetector(
      onTap: () => context.go(Routes.contact),
      child: MouseRegion(
        onEnter: (val) {
          if (context.isMobile) return;
          setState(() => isHovering = true);
        },
        onExit: (val) {
          if (context.isMobile) return;
          setState(() => isHovering = false);
        },
        cursor: SystemMouseCursors.click,
        child: Stack(
          alignment: Alignment.center,
          children: [
            AnimatedRotation(
              duration: Duration(milliseconds: 500),
              turns: isHovering ? 0.2 : 0,
              curve: Curves.ease,
              child: Container(
                width: circleWidth,
                height: circleWidth,
                decoration: DottedDecoration(
                    shape: Shape.circle,
                    dash: [52],
                    strokeWidth: 2,
                    color:
                        context.isMobile ? Colors.transparent : Colors.white),
                padding: EdgeInsets.all(30),
              ),
            ),
            AnimatedRotation(
              curve: Curves.ease,
              duration: Duration(milliseconds: 500),
              turns: isHovering ? 0.1 : 0,
              child: Container(
                width: circleWidth - 50,
                height: circleWidth - 50,
                decoration: DottedDecoration(
                  shape: Shape.circle,
                  dash: [10],
                  color: context.isMobile
                      ? Colors.transparent
                      : Theme.of(context).colorScheme.secondary,
                  strokeWidth: 2,
                ),
              ),
            ),
            AnimatedRotation(
              duration: Duration(milliseconds: 500),
              curve: Curves.ease,
              turns: isHovering ? -0.25 : 0,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    "DESIRE FOR A PROJECT\nTHAT ROCKS?",
                    style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                          fontSize: MediaQuery.of(context).size.width < 300
                              ? 12
                              : null,
                        ),
                  ),
                  Text(
                    "CONTACT\nSaif",
                    style: Theme.of(context).textTheme.labelLarge?.copyWith(
                          fontSize: MediaQuery.of(context).size.width < 300
                              ? 35
                              : null,
                        ),
                  ),
                  AnimatedRotation(
                    duration: Duration(milliseconds: 400),
                    curve: Curves.ease,
                    turns: isHovering ? 0.12 : 0,
                    child: Icon(
                      Icons.arrow_outward_rounded,
                      color: Colors.white,
                      size: context.isMobile ? 65 : 100,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
