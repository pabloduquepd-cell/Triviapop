# Balloon Pop Trivia

A multiplayer-friendly trivia game prototype for church events, youth nights, classrooms, and general party play.

## Current Build

- Host creates a room code.
- Players join the room from their own browser/device through Firebase Realtime Database.
- Local browser storage remains as a fallback while developing.
- Each player gets their own balloon board.
- The first player to clear the board earns the trivia question.
- Difficulty levels:
  - Easy: 1 to 2 runner balloons.
  - Medium: 2 to 4 runner balloons.
  - Hard: 4 to 5 runner balloons.
- Stage colors by round:
  - Stage 1: green balloons.
  - Stage 2: orange balloons.
  - Stage 3: blue balloons.
  - Stage 4: red balloons.
  - Stage 5: purple balloons.
  - Stage 6: gold balloons.
  - Stage 7 and above: mixed colors.
- Balloon popping rounds with one-click, multi-click, and escape balloons.
- Pop sound styles:
  - Classic Pop
  - Soft Pop
  - Spark Pop
- Built-in background music themes:
  - Celebration
  - Arcade
  - Chill
- Optional background music upload for custom event tracks.
- Main page and game arena backgrounds with event-style balloon visuals.
- Trivia reveal for the round winner.
- Bible and general trivia categories:
  - Old Testament
  - New Testament
  - General Bible
  - David
  - 12 Disciples
  - Music
  - Sports
  - General Trivia
- Scoreboard, speed bonus, answer points, rounds, and final results.

## Next Milestones

1. Add Firebase Hosting deploy setup.
2. Add secure Realtime Database rules before public launch.
3. Add host controls for category selection, round start, and question review.
4. Add a question-pack editor for churches and event organizers.
5. Prepare marketplace-ready branding, onboarding, privacy copy, and deployment.
