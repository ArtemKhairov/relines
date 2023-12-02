import { configure } from "mobx";

configure({
  useProxies: "ifavailable",
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});
