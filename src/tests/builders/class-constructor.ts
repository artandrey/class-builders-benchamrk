import { toBuilderMethod } from 'class-constructor';

import { ClassToBeBuilt } from './class-to-be-built';

export class ClassConstructorBuilder extends ClassToBeBuilt {
  static builder = toBuilderMethod(ClassToBeBuilt).classAsOptionals();
}
