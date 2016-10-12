/**
 * action generating function
 * @param {string} actionType The action type
 * @param {object} data The action data
 */

export function actionGenerate(actionType, data) {

  return {
    actionType: actionType,
    data: data
  };

}