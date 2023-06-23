import { cleanDocs } from './clean.mjs'
import { jsdocBuild } from './jsdoc.mjs'

async function docs () {
  await cleanDocs()
  await jsdocBuild()
}

export { docs }
