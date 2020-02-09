const Med = require("../model/Med");
const MedDto = require("../dto/Med");

class MedService {
  async getMedByID(farmacie) {
    const medCol = await Med.find({ farmacie: farmacie }).limit(1);
    const med = medCol[0];
    if (med) {
      return new MedDto(med.name, med.farmacie);
    } else {
      throw Error(`ID ${farmacie} not found`);
    }
  }

  async allMeds() {
    const meds = await Med.find();
    const medsDto = [];
    for (const m of meds) {
      medsDto.push(new MedDto(m.name, m.farmacie));
    }
    return medsDto;
  }
}

module.exports = new MedService();