const Farm = require("../model/Farm");
const FarmDto = require("../dto/Farm");

class FarmService {
  async getFarmByID(id) {
    const farmCol = await Farm.find({ id: id }).limit(1);
    const farm = farmCol[0];
    if (farm) {
      return new FarmDto(farm.name, farm.strada, farm.id);
    } else {
      throw Error(`ID ${id} not found`);
    }
  }

  async allFarms() {
    const farms = await Farm.find();
    const farmsDto = [];
    for (const f of farms) {
      farmsDto.push(new FarmDto(f.name, f.strada, f.id));
    }
    return farmsDto;
  }
}

module.exports = new FarmService();