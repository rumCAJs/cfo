# CFO

CFO is a traditional two-pane file manager. It is aimed at power users, built to be controlled (almost exlusively) with keyboard shortcuts (most notably F-keys).

CFO shall become a modernized version of [Fire Commander](https://addons.mozilla.org/en-us/firefox/addon/fire-commander/). Fire Commander is built using XUL/XPCOM, a tech stack that is becoming obsolete. Electron-based CFO will continue its mission.

## Feature + Task list

- Directory listing
  - [X] Tabs
  - [ ] Filetype/symlink icons
- [ ] Menu
- File operations
  - [X] Create file/directory
  - [X] Scan
  - [X] Delete
  - [X] Copy
  - [X] Move
  - [ ] Search
- Viewers
  - [ ] Image
  - [ ] Text
  - [ ] Audio
  - [ ] Video
- File systems
  - [X] Local
  - [ ] ZIP
  - [ ] ISO 9660
  - [ ] Windows drives
  - [ ] Favorites
  - [ ] SQLite
  - [ ] Wifi?
- Miscellaneous
  - [ ] Configuration
  - [ ] Persistence
  - [ ] Selection
  - [ ] Clipboard support
  - [ ] App icon

## Building & Running

```bash
$ npm install
$ make
$ npm start
```

## Contributing

This project is looking for contributors. Please open an issue describing your intentions before working on a PR.
