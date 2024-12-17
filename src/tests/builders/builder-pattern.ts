import { Builder } from 'builder-pattern';

import { ClassToBeBuilt } from './class-to-be-built';

export class BuilderPatternClass {
  public static builder() {
    return Builder(ClassToBeBuilt);
  }
}
