import { ClassBuilderMixin } from 'builder-ts';

import { ClassToBeBuilt } from './class-to-be-built';

export class BuilderTsBuilder extends ClassBuilderMixin(ClassToBeBuilt) {
  static builder() {
    return new BuilderTsBuilder();
  }
}
