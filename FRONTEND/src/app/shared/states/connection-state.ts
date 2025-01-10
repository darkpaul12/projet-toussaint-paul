import { ConnectionStateModel } from "./connection-state-model";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ChangeConnectedStatusFalse, ChangeConnectedStatusTrue} from "../action/connection-action";

@State<ConnectionStateModel>({
  name: 'connection',
  defaults: {
    connected: false,
  }
})
@Injectable()
export class ConnectionState {
  @Selector()
  static getConnectionStatus(state: ConnectionStateModel) {
    return state.connected;
  }

  @Action(ChangeConnectedStatusTrue)
  changeConnectedStatusTrue({ patchState }: StateContext<ConnectionStateModel>) {
    patchState({ connected: true });
  }

  @Action(ChangeConnectedStatusFalse)
  changeConnectedStatusFalse({ patchState }: StateContext<ConnectionStateModel>) {
    patchState({ connected: false });
  }
}
