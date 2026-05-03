# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

A minimal, ready-to-use template for creating a blog with the [**Chirpy**][chirpy] Jekyll theme. Get up and running in minutes with all critical files pre-configured.

## Why This Starter Exists

When installing Chirpy through [RubyGems.org][gem], Jekyll can only read a subset of theme files (`_data`, `_layouts`, `_includes`, `_sass`, `assets`) and limited `_config.yml` options from the gem. As a result, users cannot enjoy the full out-of-the-box experience that Chirpy offers.

To unlock all features, the following files must be present in your Jekyll site:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

This starter bundles those files from the latest **Chirpy** release along with a [CD][CD] workflow, so you can start writing immediately.

## Usage

Check out the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki).

## Contributing

This repository is automatically updated with new releases from the theme repository. If you encounter any issues or want to contribute to its improvement, please visit the [theme repository][chirpy] to provide feedback.

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
> ### ⚙️ Technical Note: Codespace Capacity Management
> **Status:** Capacity Reached (30/30)
> **Issue:** GitHub Codespaces has reached the maximum allocation for personal accounts. This prevents the creation of new development environments for site updates.
> 
> **The Fix:** > * **Audit:** Review all active and stopped environments at `github.com/codespaces`.
> * **Prune:** Delete "dormant" codespaces linked to completed content migrations (e.g., February 2026 batches).
> * **Sync:** Ensure all changes are committed and pushed to `origin main` before deletion to prevent data loss.
> 
> **Pro-Tip:** Habit-stack your technical maintenance. Every time you finish a "Hub" migration (like the Psoriasis cluster), delete the associated codespace to keep your workbench clear.
{: .prompt-warning }
