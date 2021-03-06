# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Docs (readme, license, changelog)
- New event onReceiveKey
- End-to-end tests with Cypress [#3]
- Handle clipboard paste [#11]
- Unit tests with Jest + Enzyme [#2]
- Right-to-left support [#9]

### Fixed

- Base system on evt.key instead of evt.keyCode, to avoid conflicts (uppercase/lowercase, numeric keypad) [#1]
- Unnecessary re-renders (useMVU)

[#1]: https://github.com/unfog-io/unfog-cli/issues/1
[#2]: https://github.com/unfog-io/unfog-cli/issues/2
[#3]: https://github.com/unfog-io/unfog-cli/issues/3
[#9]: https://github.com/unfog-io/unfog-cli/issues/9
[#11]: https://github.com/unfog-io/unfog-cli/issues/11
