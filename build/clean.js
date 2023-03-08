import { deleteAsync } from 'del'

/**
 * @summary clean all d.ts and d.ts.map files before generate it again
 * @async
 * @returns undefined
 */
async function cleanDTs () {
  try {
    const currentDirPath = process.cwd()
    const currentDirName = currentDirPath.split('/').pop()
    if (currentDirName === 'hubspot-fields-js') {
      await deleteAsync([`${currentDirPath}/lib/**/*.d{.ts,.ts.map}`])
      await deleteAsync([`${currentDirPath}/partials/**/*.d{.ts,.ts.map}`])
      await deleteAsync([`${currentDirPath}/*.d{.ts,.ts.map}`])
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * @summary clean secondary unneeded d.ts and d.ts.map files in build and test folders
 * @async
 * @returns undefined
 */
async function secondaryDTsClean () {
  try {
    const currentDirPath = process.cwd()
    const currentDirName = currentDirPath.split('/').pop()
    if (currentDirName === 'hubspot-fields-js') {
      await deleteAsync([`${currentDirPath}/build/**/*.d{.ts,.ts.map}`])
      await deleteAsync([`${currentDirPath}/test/**/*.d{.ts,.ts.map}`])
    }
  } catch (error) {
    console.error(error)
  }
}

export { cleanDTs, secondaryDTsClean }
