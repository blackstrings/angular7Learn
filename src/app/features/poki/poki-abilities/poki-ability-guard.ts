import {ComponentFactory, ComponentRef, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {PokiService} from '../poki-service/poki.service';


/**
 * Guard for summary view to ensure the user knows they have the ability to print.
 * Guards are only perform a soft prevention, a hacker can still breakpoint and return true if they debug into the guard.
 * Sensitive data should still be piped through a proper secure backend channel.
 * Guards need to be injected in root to work.
 *
 *  PrintViewGuard
 *  {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class PokiAbilityGuard implements CanActivate {

  constructor(
    private service: PokiService
  ) {

  }

  canActivate(): boolean {
    if (!this.service.canViewAbility) {
      return false;
    }
    return true;
  }

}
