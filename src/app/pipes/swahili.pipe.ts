import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahili'
})
export class SwahiliPipe implements PipeTransform {

  transform(value: string): string {
    // Copy the input string to a new variable
    let swahiliName = value
    // Define a dictionary for replacements: English words as keys and their Swahili translations as values
    const replacements:Record<string, string> = {
      'Fast': 'Haraka',
      'Family': 'Familia',
      'Rings': 'Pete'
    };
    // Loop over all the keys (English words) in the replacements dictionary
    for (let english in replacements) {
      // Replace all instances of the current English word in the input string with its Swahili translation
      // 'gi' flag in RegExp ensures that the replacement is case-insensitive and global (i.e., all instances are replaced, not just the first one)
      swahiliName = swahiliName.replace(new RegExp(english, 'gi'), replacements[english]);
    }
    // Return the transformed string
    return swahiliName;
  }

}
