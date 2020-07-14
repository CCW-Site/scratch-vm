const { InputUtil, StatementUtil, CompiledInput } = require('../compiler');

/**
 * @returns {Object.<string, (util: StatementUtil) => void>}
 */
module.exports.getStatements = () => {
    return {
        sensing_resettimer: resetTimer,
    };
};

/**
 * @returns {Object.<string, (util: InputUtil) => CompiledInput>}
 */
module.exports.getInputs = () => {
    return {
        sensing_touchingobject: touchingObject,
        sensing_touchingobjectmenu: touchingObjectMenu,
        sensing_timer: getTimer,
        sensing_mousex: getMouseX,
        sensing_mousey: getMouseY,
        sensing_keypressed: getKeyPressed,
        sensing_mousedown: getMouseDown,
        sensing_keyoptions: keyOption,
        sensing_username: getUsername,
        sensing_of_object_menu: ofObjectMenu,
    };
};

const touchingObject = /** @param {InputUtil} util */ (util) => {
    const TOUCHINGOBJECTMENU = util.input('TOUCHINGOBJECTMENU');
    return util.boolean(`target.isTouchingObject(${TOUCHINGOBJECTMENU})`);
};

const touchingObjectMenu = /** @param {InputUtil} util */ (util) => {
    return util.fieldString('TOUCHINGOBJECTMENU');
};

const resetTimer = /** @param {StatementUtil} util */ (util) => {
    util.writeLn('ioQuery("clock", "resetProjectTimer");');
};

const getTimer = /** @param {InputUtil} util */ (util) => {
    return util.number('ioQuery("clock", "projectTimer")');
};

const getMouseX = /** @param {InputUtil} util */ (util) => {
    return util.number('ioQuery("mouse", "getScratchX")');
};

const getMouseY = /** @param {InputUtil} util */ (util) => {
    return util.number('ioQuery("mouse", "getScratchY")');
};

const getMouseDown = /** @param {InputUtil} util */ (util) => {
    return util.boolean('ioQuery("mouse", "getIsDown")');
};

const getKeyPressed = /** @param {InputUtil} util */ (util) => {
    const KEY_OPTION = util.input('KEY_OPTION');
    return util.boolean(`ioQuery("keyboard", "getKeyIsDown", [${KEY_OPTION}])`);
};

const keyOption = /** @param {InputUtil} util */ (util) => {
    return util.fieldString('KEY_OPTION');
};

const getUsername = /** @param {InputUtil} util */ (util) => {
    return util.string('ioQuery("userData", "getUsername")');
};

const ofObjectMenu = /** @param {InputUtil} util */ (util) => {
    return util.fieldString('OBJECT');
};
