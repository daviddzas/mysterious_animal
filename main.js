// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      const randBase = Math.floor(Math.random() * this.dna.length);
    let newBase = returnRandBase();
  while (this.dna[randBase] === newBase) {
  newBase = returnRandBase();
  }
  this.dna[randBase] = newBase;
  //console.log(The mutated dna base has become: ${newBase});
  //console.log(The mutated dna base has become: ${this.dna});
  return this.dna;
  }
  }
  }
  
  let pAequor1 = pAequorFactory(1, 'A');
  let pAequor2 = pAequorFactory(2, 'G');
  
  console.log(pAequor1.mutate());
  console.log(pAequor2.mutate());
  
  
  
  
  
  