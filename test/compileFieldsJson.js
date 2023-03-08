import * as fsPromises from 'fs/promises'

async function writeJson () {
  try {
    const { default: fields } = await import('./fields.js')
    await fsPromises.mkdir('.tmp/fields', { recursive: true })
    await fsPromises.writeFile('.tmp/fields/fields.json', JSON.stringify(fields, null, 2), { encoding: 'utf8' })
  } catch (error) {
    console.error(error)
  }
}

await writeJson()
