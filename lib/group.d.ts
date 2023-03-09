/**
 * @summary Group Field wrapper
 * @param {string} label
 * @param {string} name
 * @param {T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS} [fields]
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
export function group(name: string, label: string, fields?: (T.COMMON_FIELDS & T.COMMON_GROUP_FIELDS) | undefined, ...childrens: Array<Object>): Object;
/**
 * @summary Main Style group wrapper
 * @param {Array<Object>} childrens
 * @returns {Object}
 */
export function styleGroup(...childrens: Array<Object>): Object;
import * as T from "./config/types.js";
//# sourceMappingURL=group.d.ts.map