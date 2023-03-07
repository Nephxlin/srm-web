import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import FindReplaceOutlinedIcon from "@mui/icons-material/FindReplaceOutlined";

export const editButtonsSchema = {
  suggetCardButtons: [
    {
      TYPE: 'SUGGEST',
      title: "Marcar Produto como Não Combativel",
      icon: <HighlightOffIcon />,
      modal: {
        title: "Alterar Produto para não combativel",
        description: `Deseja alterar esse produto para não combatível? 
      Ele não poderá mais ser utilizado no combate com produtos da sua loja.`,
      },
    },
    {
      title: "Produto Unico",
      icon: <Inventory2OutlinedIcon />,
    },
  ],
  subsFindProduct: [
    {
      TYPE: 'EDITING',
      title: "Buscar Produto para Substituir",
      icon: <FindReplaceOutlinedIcon />,
    },
  ],
  rivalProduct: [
    {
      TYPE: 'COMBAT',
      title: "Produto Unico",
      icon: <PublishedWithChangesOutlinedIcon />,
    },
    {
      title: "Produto Unico",
      icon: <Inventory2OutlinedIcon />,
    },
    {
      title: "Marcar Produto como Não Combativel",
      icon: <HighlightOffIcon />,
      modal: {
        title: "Alterar Produto para não combativel",
        description: `Deseja alterar esse produto para não combatível? 
        Ele não poderá mais ser utilizado no combate com produtos da sua loja.`,
      },
    },
  ],
};


