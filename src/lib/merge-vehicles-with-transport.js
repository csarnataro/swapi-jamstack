function mergeVehiclesWithTransport({ allVehicles, allTransports }) {
  return allVehicles.map((vehicle) => {
    const mergedVehicle = { ...vehicle };
    const correspondingTransport = allTransports
      .filter((currentTransport) => currentTransport.pk === vehicle.pk);
    mergedVehicle.fields = { ...correspondingTransport[0].fields, ...vehicle.fields };
    return mergedVehicle;
  });
}

module.exports = mergeVehiclesWithTransport;
