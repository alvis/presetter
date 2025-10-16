# The Essential README Checklist

> A README is a map for your code's journey - make it clear, make it helpful, make it count.
> 

📌 **Introduction**

A well-crafted README is the gateway to your project, serving as both a technical manual and a compelling invitation for collaboration. It's often the first interaction developers have with your codebase, making it crucial to strike the right balance between comprehensiveness and clarity.

This guide outlines the essential components of an effective [README.md](http://README.md), ensuring your documentation serves both newcomers and experienced contributors effectively.

---

## 🎯 Core Principles for README Writing

- **First impressions matter**: Your README is often the first and sometimes only documentation readers will consume
- **Progressive disclosure**: Present information in order of importance, from quick start to advanced usage
- **Visual hierarchy**: Use headers, lists, and formatting to create scannable content
- **Complete yet concise**: Include all necessary information without overwhelming readers
- **Keep it current**: Maintain documentation alongside code changes
- ❌ **No assumed knowledge**: Don't expect readers to know your project's context
- ❌ **No missing prerequisites**: Always list required dependencies and setup steps
- ❌ **No outdated examples**: Ensure code snippets reflect the current API

---

## 🗂️ Key Ingredients and Examples

| Ingredient | Why It Matters |
| --- | --- |
| **Catchy 📛 Title & 1‑liner** | Communicates value in <3 seconds |
| **Badges Row** | Social proof & CI health |
| **TL;DR / Quick‑Start** | Reduces friction for first run |
| **Key Features List** | Sets expectations and differentiates |
| **Problem → Solution Hook** | Shows relevance |
| **Animated Demo / GIF** | Grabs attention, proves it works |
| **Usage** | Shows how to use in common and advanced scenarios |
| **API Reference Stub or Link** | Depth for power users |
| **Performance Benchmarks** | Proof of speed |
| **Compatibility & Size** | Bundle size or support table |
| **Configuration Section** | Defaults & advanced opts |
| **Comparison / Alternatives** | Transparency builds trust |
| **Contributing & Code Style** | Welcomes PRs |
| **Roadmap & Backlog** | Signals project health |
| **Changelog** | Semantic versioning clarity |
| **Security / Responsible Disclosure** | Professionalism |
| **Troubleshooting** | Help with issues |
| **Sponsors / Thanks** | Community & funding |
| **License Badge & Blurb** | Removes legal doubts |

## Catchy 📛 Title & 1‑liner: Why It Matters

### 🚀 One-Liner Value Prop

Fastest, simplest in-memory TTL cache for TypeScript apps—**stop rewriting the wheel**!

### ✨ Tagline-Style

**tiny-cache**: Tiny, zero-dependency TypeScript cache—**always fresh, never stale**.

### 📝 What Is This?

A blazing-fast, type-safe cache for Node.js—drop in, stay fast, ship with confidence.

## Badges Row

### 🟢 CI & Test Status

[](https://img.shields.io/github/actions/workflow/status/you/tiny-cache/ci.yml)

[](https://img.shields.io/coveralls/github/you/tiny-cache/main)

### 🚚 NPM Download Badge

[](https://img.shields.io/npm/dm/tiny-cache)

Tiny-cache has over 10,000 downloads/month on npm!

### 🏆 Popularity Badges

[](https://img.shields.io/github/stars/you/tiny-cache)

Trusted by the community—star us on GitHub!

## TL;DR / Quick‑Start

### ⚡ Quick Install

```bash
npm i tiny-cache
```

### ⏳ 5-Second Usage

```tsx
import { Cache } from 'tiny-cache';
const cache = new Cache<string, number>({ ttlMs: 5_000 });
cache.set('answer', 42);
console.log(cache.get('answer')); // 42
```

### 🔗 Minimal Example & Playground

Try the [interactive REPL example](https://replit.com/@your-repo/tiny-cache-demo) and see instant results.

## Key Features List

### 📋 Feature Table

| Feature | tiny-cache | node-cache | lru-cache |
| --- | --- | --- | --- |
| Typed | ✅ | ❌ | ❌ |
| TTL Support | ✅ | ✅ | ✅ |
| Zero Deps | ✅ | ❌ | ❌ |

### 💎 Top 3 Features

- 🪶 <1 kB gzipped
- 🛡️ Full TypeScript generics
- ⏱️ Built-in TTL eviction & manual invalidation

### 🔔 Highlights Callout

> Why Choose tiny-cache?
> 
> - Never re-implement eviction again
> - IDE autocomplete for config
> - Works in hot-reload environments

## Problem → Solution Hook

### 😩 The Problem

You keep copy-pasting cache logic in every project, risking bugs and wasted time.

### 💡 The Solution

Drop in tiny-cache for out-of-the-box TTL eviction, instant type safety, and tested reliability.

### 🔄 Why Not X?

Unlike `node-cache`, tiny-cache is **typed** and tree-shakeable.

Unlike `lru-cache`, you get both **TTL** and **max size**.

## Usage

### 🟢 Common Usage: Basic Set/Get

```tsx
import { Cache } from 'tiny-cache';

const cache = new Cache<string, number>();
cache.set('count', 1);
console.log(cache.get('count')); // 1

```

- No config needed: out-of-the-box defaults (`ttlMs: Infinity`, `max: Infinity`)
- Returns `undefined` if key not found or expired

---

### 🧑‍🔬 Advanced Usage: TTL & Max Size

```tsx
const cache = new Cache<string, number>({
  ttlMs: 5000, // Entries expire after 5 seconds
  max: 2,      // Only keep the 2 most recent items
});

cache.set('foo', 123);
cache.set('bar', 456);
cache.set('baz', 789); // 'foo' is evicted (FIFO)

setTimeout(() => {
  // After 6 seconds, 'bar' and 'baz' are both expired
  console.log(cache.get('bar')); // undefined
}, 6000);

```

- TTL and FIFO eviction in action

---

### 🏗️ Pro Usage: Async Fill & Auto-Refresh Pattern

```tsx
async function getUser(id: string) {
  let user = cache.get(id);
  if (!user) {
    user = await fetchUserFromDb(id);
    cache.set(id, user, 10000); // cache for 10s
  }
  return user;
}

// Or, using a promise cache:
const promiseCache = new Cache<string, Promise<User>>();
function getUserPromise(id: string) {
  return promiseCache.get(id) || promiseCache.set(id, fetchUserFromDb(id));
}

```

- Avoid thundering herd on concurrent async requests
- Integrate seamlessly with API calls, DB queries, etc.

## API Reference Stub or Link

### 📖 Read the Docs

See [API.md](https://www.notion.so/theriety/API.md) for details on all methods and options.

### 🧑‍💻 Core API Table

| Method | Signature | Description |
| --- | --- | --- |
| set | (key, value, ttlMs?) | Add or overwrite entry |
| get | (key) | Get a value or undefined |
| evict | (key?) | Remove one or all |

### 🏗️ Common Patterns

- Cache creation
- Async filling
- Manual invalidation

## Performance Benchmarks

### 🏎️ Raw Numbers

| Library | Ops/sec (Node 20) |
| --- | --- |
| tiny-cache | 120,000 |
| node-cache | 30,000 |
| lru-cache | 32,000 |

### 🚦 Real-World Use

“tiny-cache handled 1M operations in under 10 seconds on a MacBook Air M3.”

### ⏱️ Test Script Example

```bash
pnpm bench
```

See results in `bench/results.md`.

## Compatibility & Size

### 🛠️ Support Matrix

- Node.js: >=18
- ESM & CJS
- TypeScript: 5.x+

### 📦 Bundle Size

Less than 1 kB gzipped – great for serverless and edge!

### 🔄 Tree-Shakeable

Import only what you use.

## Comparison / Alternatives

### ⚔️ Feature Comparison Table

| Feature | tiny-cache | node-cache | lru-cache |
| --- | --- | --- | --- |
| TypeScript | ✅ | ❌ | ❌ |
| TTL | ✅ | ✅ | ✅ |

### 💬 Alternative Recommendation

If you don’t need TypeScript support, try `node-cache`.

### 🧩 When to Use Each

- **tiny-cache:** Typed, lightweight
- **lru-cache:** LRU eviction
- **node-cache:** Popular but not typed

## Contributing & Code Style

### 🤝 PR Guidelines

- Fork, branch, PR
- Include tests for features

### 🧹 Lint & Test

Run `pnpm lint && pnpm test` before submitting.

### ✍️ Code Style

- Prettier enforced
- Conventional commits

## Roadmap & Backlog

### 🌟 Upcoming Features

- v2: Async eviction hooks
- v2: Expiring entry events

### 🛣️ Backlog

- TypeScript 6.x support
- Web platform build

### 🗓️ Roadmap Table

| Version | Planned Features |
| --- | --- |
| 1.1 | TTL config reload |
| 2.0 | Async hooks, new API |

## Changelog

### 📄 Latest Changes

See [CHANGELOG.md](https://www.notion.so/theriety/CHANGELOG.md) for full history.

### 🕰️ Recent Updates

- v1.1: Improved TTL accuracy
- v1.0: Initial release

### 📬 Subscribe

Get notified of new releases on [GitHub Releases](https://github.com/you/tiny-cache/releases).

## Security / Responsible Disclosure

### 🛡️ Reporting Vulnerabilities

If you find a security issue, email [security@your-domain.dev](mailto:security@your-domain.dev).

We aim to respond within 48 hours and patch ASAP.

### 🔏 Security Policy

See [SECURITY.md](https://www.notion.so/theriety/SECURITY.md) for responsible disclosure process.

## Troubleshooting

### 🚨 Common Issues

- “Cache returns undefined”: Check if entry expired (see `ttlMs`)
- “Max size evicts early”: Increase `max` option

### 🧰 Debug Tips

Set `DEBUG=tiny-cache` to get internal logs.

### 📝 FAQ Link

See [troubleshooting.md](https://www.notion.so/theriety/docs/troubleshooting.md) for more.

## FAQ

### ❓ How does TTL eviction work?

Entries expire automatically after `ttlMs`. Retrieval after expiry returns `undefined`.

### 🧑‍💻 Can I use it in a browser?

tiny-cache is intended for Node.js. For browser, consider [localforage](https://localforage.github.io/localForage/).

### 💬 Where can I get support?

Open a GitHub issue or start a discussion in [GitHub Discussions](https://github.com/you/tiny-cache/discussions).

## Sponsors / Thanks

### 💖 Open Collective

![](https://opencollective.com/xyz/backers.svg)

### 🏆 Backers

Thanks to all [GitHub Sponsors](https://github.com/sponsors/you)!

### 🎉 Acknowledgments

Special thanks to the Node.js, TypeScript, and open source community.

## License Badge & Blurb

### 📝 MIT License

MIT © 2025 Your Name

### ⚖️ License Badge

![](https://img.shields.io/badge/license-MIT-green.svg)

### 📢 Usage Rights

Free for personal and commercial use.

---

# 📚 Example

# 🔥 tiny-cache

> Feather‑weight (<1 kB gzipped) in‑memory TTL cache with first‑class TypeScript types — stop rewriting the wheel.
> 

[](https://img.shields.io/npm/v/tiny-cache?color=crimson&logo=npm)

[](https://img.shields.io/github/actions/workflow/status/your-org/tiny-cache/ci.yml?label=CI&logo=github)

[](https://img.shields.io/coveralls/github/your-org/tiny-cache/main?logo=coveralls)

[](https://img.shields.io/npm/dm/tiny-cache?color=blue)

[](https://img.shields.io/bundlephobia/minzip/tiny-cache?label=gzip%20size&logo=webpack)

[](https://img.shields.io/github/license/your-org/tiny-cache?color=success)

---

## ⚡ TL;DR / Quick‑Start

```bash
# npm
npm i tiny-cache
# pnpm
pnpm add tiny-cache
# yarn
yarn add tiny-cache
```

```tsx
import { Cache } from 'tiny-cache';

const cache = new Cache<string, number>({ ttlMs: 5_000 }); // 5 s TTL
cache.set('answer', 42);

console.log(cache.get('answer')); // 👉 42

```

---

## ✨ Key Features

| Feature | tiny‑cache | node‑cache | lru‑cache |
| --- | --- | --- | --- |
| 🔒 **Type‑safe** (generics) | ✅ | ❌ | ✅ |
| ⏱️ **TTL** out‑of‑the‑box | ✅ | ✅ | ❌ |
| 🪶 **< 1 kB gzipped** | ✅ | ❌ | ❌ |
| 📦 **Zero runtime deps** | ✅ | ❌ | ✅ |
| 🔄 Hot‑reload friendly | ✅ | ❌ | ✅ |

*Top 3 reasons you’ll love it*

- **Tiny & blazing fast** — <1 kB, 120 k ops/s on Node 20.
- **Fail‑safe** — automatic TTL & FIFO eviction, or manual control.
- **Drop‑in TypeScript UX** — fully inferred types, IDE autocomplete.

---

## 😩 Problem → 💡 Solution

> The pain: Copy‑pasted cache snippets creep into every project, riddled with edge‑case bugs.
The fix: tiny‑cache packages a battle‑tested eviction strategy, type safety, and predictable memory limits — in one line.
> 

---

## 🎞️ Demo

<!-- Replace with real GIF -->

---

## 🚀 Usage

### Basic Set / Get

```tsx
import { Cache } from 'tiny-cache';

const cache = new Cache<string, number>(); // infinite TTL, unlimited size
cache.set('count', 1);

console.log(cache.get('count')); // 1

```

### TTL + Max‑Size Eviction

```tsx
const cache = new Cache<string, number>({
  ttlMs: 5_000, // entries expire after 5 s
  max: 2        // keep the 2 freshest
});

cache.set('foo', 1);
cache.set('bar', 2);
cache.set('baz', 3);  // 'foo' evicted (FIFO)

```

### Async Fill / Promise Mode

```tsx
async function fetchUser(id: string) {
  return cache.get(id) ?? cache.set(id, db.fetchUser(id), 10_000);
}

```

---

## 🧩 API Reference

| Method | Signature | Description |
| --- | --- | --- |
| `set` | `(key, value, ttlMs?)` | Add / overwrite an entry (optional TTL). |
| `get` | `(key)` | Retrieve or `undefined` if missing. |
| `evict` | `(key?)` | Remove one key or *all* when omitted. |

## Full Option Reference

| Option | Type | Default | Meaning |
| --- | --- | --- | --- |
| `attempts` | `number` | `3` | Attempts **including** initial try. |
| `strategy` | `'exponential' | 'linear' | (...)` | `'exponential'` | Back‑off curve. |
| `baseDelayMs` | `number` | `200` | First wait time. |
| `maxDelayMs` | `number` | `30 000` | Upper bound for waits. |
| `jitter` | `'none' | 'half' | 'full'` | `'full'` | Randomization mode. |
| `shouldRetry` | `(res) => boolean` | `(status >= 500)` | Custom predicate. |
| `signal` | `AbortSignal` | — | Cancels retriable waits and fetch. |

---

## Errors

| Error Class | When It Occurs |
| --- | --- |
| `MaxRetryError` | All attempts exhausted. |
| `AbortError` | `signal` aborted before completion. |

See [**API.md**](https://www.notion.so/theriety/API.md) for full details.

---

## 🔧 Configuration

```
export interface CacheOptions<K, V> {
  /** TTL per entry in ms (∞ by default) */
  readonly ttlMs?: number;
  /** Max entries before oldest is evicted (FIFO, ∞ by default) */
  readonly max?: number;
}

```

---

## 🏎️ Performance Benchmarks

| Library | ops / sec <sub>(Node 20, M3)</sub> |
| --- | --- |
| **tiny‑cache** | **120 000** |
| node‑cache | 30 000 |
| lru‑cache | 32 000 |

> Ran with pnpm bench. Full script & raw data in /bench.
> 

---

## 🌐 Compatibility & Size

| Target | Support |
| --- | --- |
| Node.js | ≥ 18 |
| TypeScript | 5.x |
| Module formats | ESM & CJS |
| Bundle (gzip) | **0.9 kB** |

---

## 🆚 Alternatives

| Library | Size (kB) | TTL | Types | Deps |
| --- | --- | --- | --- | --- |
| **tiny‑cache** | **0.9** | ✅ | ✅ | 0 |
| node‑cache | 40 | ✅ | ❌ | 3 |
| lru‑cache | 25 | ❌ | ✅ | 0 |

> When to choose which?
• tiny‑cache for TypeScript & TTL.
• lru‑cache for LRU eviction only.
• node‑cache if you’re in plain JS and don’t mind extra weight.
> 

---

## 🤝 Contributing

1. **Fork → feature branch → PR**
2. Follow [Conventional Commits](https://www.conventionalcommits.org/)
3. `pnpm lint && pnpm test` must pass

> See CONTRIBUTING.md for code style & commit guidelines.
> 

---

## 🗺️ Roadmap

| Milestone | Status | Notes |
| --- | --- | --- |
| **v1.1** | 🚧 | TTL config hot‑reload |
| **v2.0** | 📝 spec | Async eviction hooks, `WeakRef` support |
| **v2.x** | Backlog | Browser build, TS 6.x |

---

## 📜 Changelog

See [**CHANGELOG.md**](https://www.notion.so/theriety/CHANGELOG.md) — semantic versioning since day 1.

---

## 🛡️ Security

Found a vulnerability?
Email **security\@your‑domain.dev** — we respond within **48 h** per [SECURITY.md](https://www.notion.so/theriety/SECURITY.md).

---

## 🛠️ Troubleshooting

| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| `undefined` returned too early | Entry expired (TTL) | Increase `ttlMs` or disable TTL |
| Memory keeps growing | `max` not set | Set `max` or evict manually |
| Type instantiation too deep | Large generic chains | Use `<unknown>` for `V` |

More Q&A in [**docs/troubleshooting.md**](https://www.notion.so/theriety/docs/troubleshooting.md).

---

## ❤️ Sponsors / Thanks

Special thanks to the Node.js & TypeScript communities.

![](https://opencollective.com/xyz/backers.svg)

---

## 📜 License

**MIT** © 2025 Theriety Group – free for personal & commercial use. See [**LICENSE**](https://www.notion.so/theriety/LICENSE).