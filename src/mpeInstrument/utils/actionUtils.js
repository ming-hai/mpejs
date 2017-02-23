import { normalizeNote } from './activeNoteUtils';
import { toScientificPitch, toHelmholtzPitch } from './noteNumberUtils';

export function normalizeAction(action) {
  if (action.channelScope) {
    action.channelScope = normalizeNote(action.channelScope);
  }
  return normalizeNote(action);
}

export function addScientificPitch(action) {
  if (typeof action.noteNumber === 'undefined') return action;
  return Object.assign({}, action, { pitch: toScientificPitch(action.noteNumber) });
}

export function addHelmholtzPitch(action) {
  if (typeof action.noteNumber === 'undefined') return action;
  return Object.assign({}, action, { pitch: toHelmholtzPitch(action.noteNumber) });
}