export enum MeterGeneralAction {
    Connect = 'Connect',
    Disconnect = 'Disconnect',
}

export enum MeterGroupAction {
    Insert = 'Insert',
    Remove = 'Remove',
}

export enum MeterTaskAction {
    InitSwap = 'InitSwap',
    RegisterSwap = 'RegisterSwap',
}

export type MeterActions = MeterGeneralAction | MeterGroupAction | MeterTaskAction;

let meteActions = {
    'General': MeterGeneralAction,
    'Group': MeterGroupAction,
    'Task': MeterTaskAction,
}

function performActions({name: action}: { name: MeterActions }) {

    switch (action) {
        case MeterTaskAction.InitSwap: {
            return;
        }
        case MeterTaskAction.RegisterSwap: {
            return;
        }
    }

    componentLookup(action);
}

function componentLookup(_type: Exclude<MeterActions, MeterTaskAction>) {

}
