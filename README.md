# www.smockle.com

[![Workflow Status](https://github.com/smockle/smockle.com/workflows/Workflows/badge.svg)](https://github.com/smockle/smockle.com/actions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=smockle/smockle.com)](https://dependabot.com)

Main website of Clay Miller ([Smockle](https://www.smockle.com))

## Subsetting Fonts

```Bash
$ pip install fonttools
$ pip install zopfli
$ pip install brotli
$ pyftsubset crimsonpros-regular.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-regular.woff2
$ pyftsubset crimsonpros-italic.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-italic.woff2
$ pyftsubset crimsonpros-bold.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-bold.woff2
```
