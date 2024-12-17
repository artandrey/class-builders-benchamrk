import { bench, describe } from 'vitest';

import { BuilderPatternClass } from './builders/builder-pattern';
import { BuilderTsBuilder } from './builders/builder-ts';
import { ClassConstructorBuilder } from './builders/class-constructor';

describe('class building', () => {
  bench('builder-pattern', () => {
    BuilderPatternClass.builder()
      .id(1)
      .name('test')
      .isActive(true)
      .createdAt(new Date())
      .tags(['tag1', 'tag2'])
      .counts(new Map([['key1', 1]]))
      .metadata({ key: 'value' })
      .status('active')
      .priority(1)
      .items(new Set(['item1']))
      .ratio(0.5)
      .buffer(new Uint8Array([1, 2, 3]))
      .regexp(/test/)
      .tuple(['test', 1])
      .build();
  });

  bench('builder-ts', () => {
    BuilderTsBuilder.builder()
      .setId(1)
      .setName('test')
      .setIsActive(true)
      .setCreatedAt(new Date())
      .setTags(['tag1', 'tag2'])
      .setCounts(new Map([['key1', 1]]))
      .setMetadata({ key: 'value' })
      .setStatus('active')
      .setPriority(1)
      .setItems(new Set(['item1']))
      .setRatio(0.5)
      .setBuffer(new Uint8Array([1, 2, 3]))
      .setRegexp(/test/)
      .setTuple(['test', 1])
      .build();
  });

  bench(
    'class-constructor',
    () => {
      ClassConstructorBuilder.builder()
        .id(1)
        .name('test')
        .isActive(true)
        .createdAt(new Date())
        .tags(['tag1', 'tag2'])
        .counts(new Map([['key1', 1]]))
        .metadata({ key: 'value' })
        .status('active')
        .priority(1)
        .items(new Set(['item1']))
        .ratio(0.5)
        .buffer(new Uint8Array([1, 2, 3]))
        .regexp(/test/)
        .tuple(['test', 1])
        .build();
    },
    {
      setup: () => {
        ClassConstructorBuilder.builder().build();
      },
    },
  );
});
