import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const ROOT_URL = 'https://redjadet.github.io/'

describe('redirect-pages smoke', () => {
  it('points the project Pages index redirect at the user-site root URL', () => {
    const html = readFileSync(join(root, 'redirect-pages/index.html'), 'utf8')

    expect(html).toContain(`url=${ROOT_URL}`)
    expect(html).toContain(`href="${ROOT_URL}"`)
    expect(html).toMatch(/location\.replace\(\s*'https:\/\/redjadet\.github\.io\/'/)
  })

  it('points the project Pages 404 redirect at the user-site root URL', () => {
    const html = readFileSync(join(root, 'redirect-pages/404.html'), 'utf8')

    expect(html).toContain(ROOT_URL)
  })
})
