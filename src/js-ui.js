import domz from "domz";

const chained = h => {
  return new Proxy(h, {
    get(target, propKey, _receiver) {
      return function(_target, props) {
        return new Proxy(h, {
          get(target, invokee) {
            //console.log(invokee);
            console.log({ props, target, invokee });
            if (invokee) {
              return (...chainedFnArgs) => {
                const el = h(
                  props[0],
                  { [invokee]: chainedFnArgs[0] },
                  props[2]
                );
                console.log({ el });
                return el;
              };
            }
            return h(...props);
          }
        });
      };
    }
  });
};
export default h => {
  const c = chained(h);
  return domz(c);
};
