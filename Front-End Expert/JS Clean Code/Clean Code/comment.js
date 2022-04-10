/**
 * Comment
 * - Hanya beri komentar pada logika yang kompleks
 * - Hapus kode yang tidak diperlukan
 */

// *Hanya beri komentar pada logika yang kompleks
// !Bad
// We gonna extends a method for String, so we create a new class to do that!
class SuperString extends String {
  // Add hashCode method.
  hashCode() {
    // The hash
    let hash = 0;

    // Loop through every character in data
    for (let i = 0; i < this.length; i++) {
      // Get character code
      const char = this.charCodeAt(i);
      // Make the hash
      hash = (hash << 5) - hash + char;
      // Convert to 32-bit integer
      hash |= 0;
    }
    // return the hash
    return hash;
  }
}

// *Good
/**
 * Gunakan pada saat kode yang kompleks
 */
class SuperString extends String {
  hashCode() {
    let hash = 0;

    for (let i = 0; i < this.length; i++) {
      const char = this.charCodeAt(i);
      hash = (hash << 5) - hash + char;

      // Convert to 32-bit integer
      hash |= 0;
    }
    return hash;
  }
}

// *Hapus kode yang tidak diperlukan
// !Bad
// for (let i = 0; i < selectedSongs.length; i++) {
//   buySong(selectedSongs[i]);
// }
selectedSongs.forEach((song) => buySong(song));

// *Good
selectedSongs.forEach((song) => buySong(song));
