import { useAccount } from '@/contexts/AccountContext';
import { EvilIcons } from '@expo/vector-icons';
import { Image, ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const COLORS = {
  primary: "#50B4E8",
  accent: "#FFA962",
  text: "#000",
};

export default function HomeScreen() {
  const router = useRouter();
  const { accountType } = useAccount()
  const [showModal, setShowModal] = useState(false);


  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleToOffert = () => accountType === "profesional"
    ? router.push("/(private)/(services)/offers")
    : router.push("/(private)/(services)/professional")

  const serviciosLimpieza = [
    {
      id: 1,
      label: "Limpieza profunda",
      value: "Limpieza profunda",
      nombre: "Limpieza profunda",
      icono: require("@/assets/images/limpieza/limpieza-1.jpeg"),
    },
    {
      id: 2,
      label: "Limpieza profunda",
      value: "Limpieza profunda",
      nombre: "Limpieza profunda",
      icono: require("@/assets/images/limpieza/limpieza-2.jpeg"),
    }
  ];

  const serviciosReparacion = [
    {
      id: 1,
      label: "Reparacion 1",
      value: "Reparacion 1",
      nombre: "Reparacion 1",
      icono: require("@/assets/images/reparacion/reparacion-1.jpeg"),
    },
    {
      id: 2,
      label: "Reparacion 2",
      value: "Reparacion 2",
      nombre: "Reparacion 2",
      icono: require("@/assets/images/reparacion/reparacion-2.jpeg"),
    },
  ];

  const SERVICIOS = [
    {
      id: 1,
      label: "Belleza",
      icono: () => (
        <Svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            d="M5.64 10.777a.393.393 0 00-.545.12c-.038.06-.138.12-.272.12-.135 0-.236-.06-.273-.12a.396.396 0 00-.665.426c.191.298.55.484.938.484.387 0 .746-.186.937-.484a.396.396 0 00-.12-.546zM9.413 10.777a.393.393 0 00-.545.12c-.038.06-.138.12-.273.12-.134 0-.235-.06-.272-.12a.395.395 0 00-.665.426c.19.298.55.484.937.484s.747-.186.938-.484a.394.394 0 00-.12-.546z"
            fill="#0073B6"
          />
          <Path
            d="M11.081 14.328c.33-.479.585-1.016.758-1.601.065-.091.133-.183.2-.273.68-.92 1.38-1.871 1.38-4.044 0-2.283-1.28-4.287-3.197-5.406V2.97C10.032 1.249 8.555 0 6.712 0 4.866 0 3.375 1.26 3.196 2.993v.011C1.279 4.123 0 6.127 0 8.41c0 2.15.737 3.16 1.447 4.137l.128.177c.685 2.32 2.606 3.819 5.133 3.819.923 0 1.801-.212 2.565-.608l.947.948a.392.392 0 00.557 0 .395.395 0 000-.558l-1.169-1.171.59-.59 1.425 1.426a.394.394 0 10.559-.559L11.08 14.33l.001-.001zM6.711.792c1.249 0 2.28.723 2.62 1.775a7.012 7.012 0 00-2.623-.506c-.93 0-1.815.18-2.618.504C4.43 1.512 5.458.79 6.71.79v.002zm-5 8.852c-.02 0-.038.004-.057.008-.006 0-.011.002-.018.004-.02.006-.039.011-.059.02-.004 0-.01.003-.014.006-.018.008-.035.02-.052.03-.003.003-.01.005-.013.01a.617.617 0 00-.042.037l-.015.015-.03.038a.114.114 0 00-.015.024c-.008.012-.012.024-.018.038a.185.185 0 00-.014.034l-.01.036a.263.263 0 00-.008.041l-.002.012a7.655 7.655 0 00-.037.865C1.003 10.25.793 9.5.793 8.41c0-3.065 2.656-5.558 5.92-5.558 3.263 0 5.919 2.495 5.919 5.558 0 1.14-.213 1.888-.518 2.486 0-.045.004-.09.004-.136 0-.23-.01-.46-.032-.69v-.007c0-.014-.006-.028-.007-.042-.003-.012-.004-.024-.008-.036l-.015-.035-.016-.036-.02-.029c-.008-.012-.014-.022-.024-.032-.008-.01-.015-.015-.025-.025a.48.48 0 00-.03-.028c-.007-.008-.017-.011-.027-.02a.438.438 0 00-.036-.022 1.286 1.286 0 01-.03-.011.256.256 0 00-.042-.016l-.03-.006a.332.332 0 00-.047-.007h-.007C9.71 9.592 8.242 8.254 7.694 7.67a10.7 10.7 0 001.157-1.337.393.393 0 00-.087-.551.392.392 0 00-.55.087C5.596 9.456 1.778 9.647 1.725 9.65h-.01l-.005-.006zm7.275 5.017l-1.025-.587c.067-.14.208-.37.5-.662.294-.295.523-.435.662-.5l.584 1.025-.72.722v.002zm.812-2.156s-.008-.012-.01-.018a.788.788 0 00-1.001-.289c-.287.137-.583.356-.883.656-.3.3-.521.597-.655.884a.79.79 0 00.288 1.002l.018.01 1.076.614a4.754 4.754 0 01-1.921.385c-2.762 0-4.619-2.005-4.619-4.992 0-.12.004-.237.01-.356.83-.1 2.962-.51 4.997-2.204.589.635 2.087 2.01 4.221 2.27.004.097.006.195.006.291 0 1.147-.28 2.174-.81 3l-.717-1.257v.004z"
            fill="#0073B6"
          />
        </Svg>
      ),
    },
    {
      id: 2,
      label: "Decoración",
      icono: () => (
        <Svg
          width={14}
          height={20}
          viewBox="0 0 7 16"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.136 3.28c.024-.763.028-1.634.308-2.353.11.226.172.478.225.723.122.573.206 1.366.206 2.325 0 .254-.004.502-.013.742a9.326 9.326 0 00-.726-1.438zm-.71-.812c.053-.727.143-1.276.261-1.658.08-.254.187-.493.35-.645a.585.585 0 01.35-.163.56.56 0 01.37.105c.18.124.305.338.395.547.097.222.18.501.249.822.048.23.091.489.126.77.062-.06.125-.114.192-.156.09-.057.21-.11.351-.103.337.016.468.324.511.479.05.179.06.396.056.607-.01.434-.089.98-.191 1.483-.093.454-.21.9-.325 1.218.23.135.366.418.306.713l-.371 1.841h1.069c.483 0 .875.414.875.924v3.165c0 .465-.326.85-.75.914v.273a.386.386 0 01-.375.396.386.386 0 01-.375-.396v-.263h-4v.263a.386.386 0 01-.375.396.386.386 0 01-.375-.396v-.273c-.424-.064-.75-.449-.75-.914V9.252c0-.51.392-.924.875-.924h.944l-.371-1.841a.668.668 0 01.383-.751c-.33-.86-.507-1.567-.557-2.1a2.28 2.28 0 01.033-.742c.052-.206.167-.44.407-.545.242-.106.503-.026.712.119zm.198 3.222h.805a15.66 15.66 0 00-.162-.428c-.346-.88-.681-1.478-.956-1.83a1.532 1.532 0 00-.287-.295 1.641 1.641 0 00-.003.422c.042.454.207 1.127.554 2.007l.05.124zm2.001-1.714c0-.199-.003-.392-.01-.578.105-.168.196-.299.273-.4-.002.468-.083.937-.176 1.392-.032.16-.068.317-.104.463.011-.283.017-.577.017-.877zm.037 2.506l-.373 1.846H2.586l-.373-1.846h2.449zM.875 9.12h5.25c.069 0 .125.06.125.132v1.714H.75V9.252c0-.073.056-.132.125-.132zM.75 11.758v.66c0 .072.056.131.125.131h5.25c.069 0 .125-.06.125-.132v-.66H.75zm2-2.11h1.375c.207 0 .375.177.375.395a.386.386 0 01-.375.396H2.75a.386.386 0 01-.375-.396c0-.218.168-.396.375-.396z"
            fill="#484C4F"
          />
        </Svg>
      ),
    },
    {
      id: 3,
      label: "Instalación",
      icono: () => (
        <Svg
          width={16}
          height={16}
          viewBox="0 0 14 14"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            d="M.226 2.06h.563c.08 0 .155.042.195.112l.137.237v-.25C1.12.97 2.09 0 3.28 0h1.664c.089 0 .165.051.202.126.064.11.242.113.31.005A.226.226 0 015.662 0h.943c.125 0 .226.101.226.226v1.918a.225.225 0 01.19.128l.786 1.664.001.003a.21.21 0 01.016.05l.001.009a.215.215 0 01.004.034v2.742h1.034l.11-.196-.25-.21a.226.226 0 01-.04-.302l.215-.313L8.6 5.53a.225.225 0 01-.047-.311l.253-.354-.338-.229a.225.225 0 01-.058-.316l.224-.321-.275-.155a.227.227 0 01-.112-.162l-.053-.337c-.017-.01-.035-.018-.05-.032L7.015 2.235a.225.225 0 01-.07-.163V.226C6.945.1 7.047 0 7.171 0h4.489c.124 0 .226.101.226.226V3.15a.226.226 0 01-.226.225h-.076v1.278l1.432-2.48a.226.226 0 01.195-.114h.563c.125 0 .226.101.226.226v11.49a.226.226 0 01-.226.225H.226A.226.226 0 010 13.774V2.285c0-.125.101-.226.226-.226zm5.58 4.714V4.032c0-.012.002-.023.004-.034v-.01a.231.231 0 01.017-.049l.001-.003.73-1.55h-.897a.225.225 0 01-.202-.126c-.06-.104-.223-.114-.296-.024l-.115.928v3.61h.758zm.452-2.516v2.516h.333V4.258h-.333zm-1.66-.88h-.743v3.396h.742V3.378zm-1.194-.126a.213.213 0 01-.023-.072l-.097-.794h-.719a.18.18 0 00-.126.05.183.183 0 00-.054.129.633.633 0 01-.632.633.624.624 0 01-.196-.035l1.847 3.2V3.252zm2.974-2.8h-.6a.629.629 0 01-.95 0H3.28A1.71 1.71 0 001.572 2.16v.406c0 .1.081.18.18.18a.18.18 0 00.18-.18c0-.167.066-.326.187-.45a.636.636 0 01.445-.182h.919c.114 0 .21.085.224.198l.098.795h.818l.097-.787a.225.225 0 01.027-.088.632.632 0 011.032-.118h.6V.452zm.44 2.445l-.43.91h.858l-.429-.91zm.558 1.36h-.333v2.517h.333V4.258zM11.434.453H7.397v1.524l.993.947h3.044V.453zm-.302 2.923H8.655l.02.128.397.224a.227.227 0 01.074.326l-.235.337.34.23a.227.227 0 01.056.318l-.26.363.296.221a.226.226 0 01.05.309l-.222.323.236.199c.083.07.104.188.051.283l-.078.138h.979l.773-1.34v-2.06.001zM.452 13.548h13.097v-1.741H9.415a.226.226 0 010-.452h4.134V9.237H8.02a.226.226 0 010-.452h5.527V2.511h-.207l-1.76 3.049a.226.226 0 01-.029.098l-.868 1.458c-.007.011-.016.02-.024.03l-.012.015c-.008.009-.02.016-.03.023-.005.004-.01.009-.016.012-.01.006-.023.01-.035.015l-.019.008a.218.218 0 01-.059.007H3.511a.226.226 0 01-.196-.112L.658 2.511H.451v11.036z"
            fill="#484C4F"
          />
          <Path
            d="M10.979 2.716h-2.4a.225.225 0 01-.156-.063l-.727-.693a.225.225 0 01-.07-.164v-.91c0-.125.101-.226.226-.226h3.127c.125 0 .226.1.226.226V2.49a.226.226 0 01-.226.226zm-.226-1.605H8.078v.59l.59.563h2.085V1.111zM1.323 10.453H5.85a.226.226 0 010 .451H1.323a.226.226 0 010-.451zM2.807 12.42h4.322a.226.226 0 010 .452H2.807a.226.226 0 010-.451zM6.817 9.387a.377.377 0 110-.753.377.377 0 010 .753zm0-.452a.076.076 0 100 .151.076.076 0 000-.15zM1.474 12.27a.376.376 0 11-.001.752.376.376 0 010-.752zm0 .452a.076.076 0 10-.001-.151.076.076 0 000 .15zM3.215 9.366a.376.376 0 110-.752.376.376 0 010 .752zm0-.452a.076.076 0 100 .151.076.076 0 000-.15zM8.021 11.205a.376.376 0 110 .752.376.376 0 010-.752zm0 .451a.075.075 0 100-.15.075.075 0 000 .15z"
            fill="#484C4F"
          />
        </Svg>
      ),
    },
    {
      id: 4,
      label: "Jardinería",
      icono: () => (
        <Svg
          width={18}
          height={18}
          viewBox="0 0 16 16"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            d="M6.264 14h-2.74a1.11 1.11 0 01-1.062-.802l-1.03-3.602a.368.368 0 01.354-.47h6.215a.367.367 0 01.355.47l-1.03 3.602a1.11 1.11 0 01-1.063.801zM2.275 9.863l.896 3.133a.37.37 0 00.354.267h2.739a.37.37 0 00.354-.267l.895-3.133H2.275z"
            fill="#484C4F"
          />
          <Path
            d="M8.667 9.863H1.121a.369.369 0 01-.369-.368V8.297a.86.86 0 01.86-.86h6.564a.86.86 0 01.86.86v1.198a.369.369 0 01-.369.368zm-7.178-.737H8.3v-.83a.123.123 0 00-.123-.122H1.612a.123.123 0 00-.123.123v.83z"
            fill="#484C4F"
          />
          <Path
            d="M4.894 8.174a.369.369 0 01-.369-.369V3.4a.369.369 0 01.737 0v4.406a.369.369 0 01-.368.369z"
            fill="#484C4F"
          />
          <Path
            d="M4.894 4.457c-.798 0-1.41-.691-1.491-1.681C3.28 1.269 4.599.134 4.655.087a.37.37 0 01.477 0c.056.048 1.374 1.183 1.252 2.688-.08.991-.693 1.682-1.49 1.682zm0-3.569c-.314.35-.82 1.042-.756 1.828.048.591.359 1.005.756 1.005s.708-.414.755-1.005c.064-.786-.442-1.478-.755-1.828zM7.567 6.375c-.423 0-.806-.165-1.072-.491-.503-.619-.354-1.53.363-2.218 1.091-1.045 2.803-.74 2.876-.727.176.034.304.19.3.37 0 .074-.049 1.812-1.293 2.669-.387.266-.796.397-1.174.397zm1.507-2.75c-.486 0-1.206.094-1.706.573-.428.41-.552.912-.301 1.22.25.309.767.288 1.256-.048.65-.447.867-1.276.94-1.74a3.539 3.539 0 00-.189-.005z"
            fill="#484C4F"
          />
          <Path
            d="M4.894 7.162a.368.368 0 01-.206-.674l2.896-1.943a.368.368 0 11.41.612L5.099 7.1a.367.367 0 01-.205.062zM2.36 6.416c-.363 0-.755-.126-1.125-.38C.047 5.218.001 3.56 0 3.49a.369.369 0 01.301-.37c.069-.013 1.702-.304 2.743.694.688.66.83 1.534.346 2.129a1.295 1.295 0 01-1.03.473zm-.707-.988c.455.313.935.333 1.166.05.231-.284.114-.75-.285-1.132-.526-.504-1.316-.555-1.76-.534.071.44.279 1.203.88 1.616z"
            fill="#484C4F"
          />
          <Path
            d="M4.893 7.162a.367.367 0 01-.205-.062L1.942 5.257a.368.368 0 11.41-.611l2.746 1.842a.368.368 0 01-.206.674zM11.68 14c-1.117 0-2.014-2.562-2.142-4.326a1.758 1.758 0 01.407-1.258c.346-.41.848-.645 1.38-.645h.705c.535 0 1.039.235 1.381.645.297.355.442.802.41 1.257C13.687 11.48 12.81 14 11.68 14V14zm-.354-5.492c-.314 0-.612.14-.816.382-.17.204-.255.465-.236.73.146 2.028 1.084 3.643 1.406 3.643.321 0 1.257-1.615 1.406-3.643a1.023 1.023 0 00-.24-.732 1.06 1.06 0 00-.815-.38h-.705z"
            fill="#484C4F"
          />
          <Path
            d="M11.68 11.585c-.92 0-1.615-1.68-1.816-2.872a.369.369 0 01.727-.122c.23 1.369.877 2.251 1.088 2.257.211-.003.857-.881 1.086-2.256a.369.369 0 01.727.12c-.199 1.193-.892 2.873-1.813 2.873zM11.703 6.734h-.048a.972.972 0 01-.97-.97V2.841c0-.535.435-.97.97-.97h.048c.535 0 .97.435.97.97v2.923c0 .535-.435.97-.97.97zm-.048-4.127a.234.234 0 00-.234.233v2.923c0 .13.105.234.234.234h.048a.234.234 0 00.233-.234V2.841a.234.234 0 00-.233-.234h-.048z"
            fill="#484C4F"
          />
          <Path
            d="M11.679 8.507a.369.369 0 01-.369-.369V6.366a.369.369 0 01.737 0v1.772a.369.369 0 01-.368.369z"
            fill="#484C4F"
          />
        </Svg>
      ),
    },
    {
      id: 5,
      label: "Plomería",
      icono: () => (
        <Svg
          width={16}
          height={16}
          viewBox="0 0 12 14"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            d="M.24 7.68h2.88c.134 0 .24-.106.24-.24V6a.238.238 0 00-.24-.24h-.24V1.92h.24c.134 0 .24-.106.24-.24V.24A.238.238 0 003.12 0H.24A.238.238 0 000 .24v1.44c0 .134.106.24.24.24h.24v3.84H.24A.238.238 0 000 6v1.44c0 .134.106.24.24.24zM.48.48h2.4v.96H.48V.48zm.48 1.44H2.4v3.84H.96V1.92zM.48 6.24h2.4v.96H.48v-.96z"
            fill="#484C4F"
          />
          <Path
            d="M11.76 3.36h-1.2v-.24a.238.238 0 00-.24-.24H8.88a.238.238 0 00-.24.24v.24h-.72A3.126 3.126 0 004.8 6.48v.72h-.24a.238.238 0 00-.24.24v1.44c0 .134.106.24.24.24h.24v1.372c0 .528-.38.975-.86 1.023a.935.935 0 01-.743-.245.963.963 0 01-.317-.715v-.48h.24c.134 0 .24-.106.24-.24v-1.44a.238.238 0 00-.24-.24H.24a.238.238 0 00-.24.24v1.44c0 .134.106.24.24.24h.24v.35c0 1.867 1.46 3.432 3.254 3.49h.106c.878 0 1.709-.336 2.338-.95A3.343 3.343 0 007.2 10.55V9.11h.24c.134 0 .24-.106.24-.24V7.43a.238.238 0 00-.24-.24H7.2v-.71c0-.399.322-.72.72-.72h.72V6c0 .134.106.24.24.24h1.44c.134 0 .24-.106.24-.24v-.24h1.2c.134 0 .24-.106.24-.24V3.6a.238.238 0 00-.24-.24zM.48 8.64h2.4v.96H.48v-.96zm6.24 1.92c0 .787-.312 1.521-.874 2.069-.561.547-1.31.84-2.093.81C2.213 13.393.96 12.044.96 10.43v-.35H2.4v.48a1.444 1.444 0 001.589 1.435c.724-.072 1.29-.734 1.29-1.502V9.12h1.44v1.44zm.48-1.92H4.8v-.96h2.4v.96zm.72-3.36a1.2 1.2 0 00-1.2 1.2v.72H5.28v-.72a2.645 2.645 0 012.64-2.64h.72v1.44h-.72zm2.16.48h-.96v-2.4h.96v2.4zm1.44-.48h-.96V3.84h.96v1.44z"
            fill="#484C4F"
          />
        </Svg>
      ),
    },
    {
      id: 6,
      label: "Limpieza",
      icono: () => (
        <Svg
          width={18}
          height={18}
          viewBox="0 0 14 14"
          fill="none"
          style={{ minWidth: 24 }}
        >
          <Path
            d="M4.899 12.012H3.89L6.773.98A.764.764 0 006.63.312.767.767 0 006.02 0a.73.73 0 00-.71.554L2.3 12.012H1.035C.47 12.012 0 12.48 0 13.049v.525h5.92v-.54c0-.554-.468-1.022-1.021-1.022zM5.849.71c.015-.071.086-.128.171-.128.071 0 .128.029.17.085.043.057.057.114.043.17L3.308 11.942h-.411L5.85.71zM1.037 12.58h2.727c.241 0 .44.184.454.426H.567a.476.476 0 01.47-.426zm3.749.426a.867.867 0 00-.114-.426h.213c.242 0 .44.184.455.426h-.554z"
            fill="#484C4F"
          />
          <Path
            d="M12.58 5.452H9.896v.454h-.752a1.012 1.012 0 00-.667-.667c.014-1.05.284-1.917.752-2.385.27-.27.61-.412 1.008-.412.98 0 1.775 1.178 1.775 2.627h.568c0-1.76-1.065-3.195-2.343-3.195a1.95 1.95 0 00-1.42.582c-.752.767-.894 2.03-.908 2.783a.984.984 0 00-.668.667H5.807l-.1.994.81 6.674h6.176l.242-1.988h.298c.426 0 .767-.34.767-.767V6.886a1.418 1.418 0 00-1.42-1.434zm-.383 7.554H7.028l-.056-.469H9.64v-.568H6.9l-.327-2.698h2.783v-.567H6.503l-.071-.568h2.925v-.568H6.36L6.276 6.9l.042-.426h1.449V6.19c0-.241.184-.426.426-.426.24 0 .426.185.426.426v.284h1.277v4.345c0 .426.341.767.767.767h1.704l-.17 1.42zm1.249-2.187a.194.194 0 01-.199.199h-1.746V8.334h-.568v2.684h-.256a.194.194 0 01-.198-.199V6.02h2.115a.86.86 0 01.866.866v3.933h-.014z"
            fill="#484C4F"
          />
        </Svg>
      ),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <View style={styles.firstSection}>
          <ImageBackground
            source={require("@/assets/images/hero-background.png")}
            style={StyleSheet.absoluteFillObject}
            contentFit="cover"
          />

          <View
            style={{
              flex: 1,
              backgroundColor: "#0C85BEDD",
              paddingHorizontal: 10,
              paddingTop: 20,
              position: "relative"
            }}
          >
            <View style={{ width: "100%", backgroundColor: "white", borderRadius: 20, position: "relative" }}>
              <TextInput placeholderTextColor={"#00000066"} placeholder='¿Cómo podemos ayudarte?' style={{ width: "100%", paddingVertical: 15, paddingHorizontal: 20 }} />

              <Pressable onPress={() => router.push("/(private)/(services)/professional")} style={{ position: "absolute", right: 20, height: "100%", }}>
                <EvilIcons name='search' color={"#00000066"} size={28} style={{ alignItems: "center", justifyContent: "center", marginVertical: "auto" }} />
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 12
              }}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 60,
                }}
                contentFit="contain"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "white",
                  width: "80%",
                }}
              >
                Hola Jose 👋
              </Text>

            </View>

            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <View style={{ width: "50%", height: 100, gap: 10, marginVertical: 40 }}>
                <Text style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                  ¡HASTA +20%
                  EN LIMPIEZA HOY!
                </Text>

              </View>

              <View
                style={{
                  position: "absolute",
                  right: -20,
                  width: 190,
                  height: 210,
                  bottom: -20,
                  zIndex: 10
                }}
              >
                <Image
                  source={require("@/assets/images/saludo.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  contentFit="contain"
                />
              </View>
            </View>
          </View>
        </View>

        <Servicios />

        <BannerDiagonal />

        <View style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 700, color: "#0073B6" }}>Limpieza</Text>
            <Pressable>
              <Text>Ver todo</Text>
            </Pressable>
          </View>

          <FlatList
            data={serviciosLimpieza}
            horizontal
            style={{ marginTop: 15 }}
            showsHorizontalScrollIndicator={false}
            renderItem={(item => (
              <Pressable
                onPress={() => router.push("/(private)/(services)/Hire")}
                style={{ marginHorizontal: 20 }}
              >
                <Image
                  source={item.item.icono}
                  style={[stylesServicios.icono, { height: 120, width: 180, borderRadius: 15 }]}
                  contentFit="cover"
                />

                <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.item.label}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>
                    € 19.50
                  </Text>
                  <Text style={{ color: "#0C85BE", fontWeight: 700, marginLeft: 10 }}>
                    € 7,80
                  </Text>
                </View>
              </Pressable>
            ))}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 700, color: "#0073B6" }}>Reparación</Text>
            <Pressable>
              <Text>Ver todo</Text>
            </Pressable>
          </View>

          <FlatList
            data={serviciosReparacion}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 15 }}
            renderItem={(item => (
              <Pressable
                onPress={() => router.push("/(private)/(services)/Hire")}
                style={{ marginHorizontal: 20 }}
              >
                <Image
                  source={item.item.icono}
                  style={[stylesServicios.icono, { height: 120, width: 180, borderRadius: 15 }]}
                  contentFit="cover"
                />

                <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.item.label}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>
                    € 19.50
                  </Text>
                  <Text style={{ color: "#0C85BE", fontWeight: 700, marginLeft: 10 }}>
                    € 7,80
                  </Text>
                </View>
              </Pressable>
            ))}
          />
        </View>

        <BannerDiagonal2 />

        <View style={{ gap: 15, paddingVertical: 20 }}>
          {SERVICIOS.map(servicio => (
            <Pressable onPress={() => router.push("/(private)/(services)/professional")} key={servicio.id} style={{ marginHorizontal: 20, flexDirection: "row", gap: 10, paddingHorizontal: 6, borderBottomWidth: .5, borderBottomColor: "#000000", paddingVertical: 10 }}>
              {servicio.icono()}
              <Text style={{ fontSize: 16 }}>{servicio.label}</Text>
              <Svg
                width={9}
                height={16}
                viewBox="0 0 9 16"
                fill="none"
                style={{ marginLeft: "auto" }}
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.636 7.305L1.689.287C1.285-.096.666-.096.285.287c-.38.384-.38 1.03 0 1.414L6.542 8 .285 14.3c-.38.407-.38 1.03 0 1.413.381.383 1 .383 1.404 0l6.947-6.994c.38-.408.38-1.03 0-1.414z"
                  fill="#484C4F"
                />
              </Svg>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#0C85BE",
              padding: 20,
              borderRadius: 12,
              width: "90%",
              alignItems: "center",
              gap: 10
            }}
          >
            <Text style={{ width: "100%", fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Filtrar búsqueda</Text>

            <TextInput
              placeholder="Seleccionar ubicación"
              onFocus={handleOpenModal}
              style={{
                padding: 14,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%"
              }}
              placeholderTextColor={"#1E1E1ECC"}
            />

            <TextInput
              placeholder="Seleccionar ciudad"
              onFocus={handleOpenModal}
              style={{
                padding: 14,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%"
              }}
              placeholderTextColor={"#1E1E1ECC"}
            />

            <View
              style={{
                paddingHorizontal: 4,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#00000050",
                width: "100%",
                height: 46,
                justifyContent: "center",
              }}
            >
              <DropDownPicker
                open={openDropdown}
                value={value}
                items={servicios}
                placeholder="Seleccione un servicio"
                setOpen={setOpenDropdown}
                setValue={setValue}

                style={{
                  borderWidth: 0,
                  backgroundColor: "transparent",
                  paddingHorizontal: 10,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 2
                }}

                textStyle={{
                  fontSize: 14,
                  textAlignVertical: "center",
                  textAlign: "left",
                }}

                placeholderStyle={{
                  opacity: 0.75,
                }}

                dropDownContainerStyle={{
                  borderWidth: 0,
                  backgroundColor: "#fff",
                  elevation: 2,
                }}
              />
            </View>

            {(() => {
              switch (value) {
                case "fontaneria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Fontanería</Text>
                      <TextInput
                        placeholder="Tipo de reparación (caño, grifo, desagüe...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Ubicación del problema (cocina, baño...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "limpieza":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Limpieza</Text>
                      <TextInput
                        placeholder="Tipo de limpieza (hogar, oficina, alfombra...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Frecuencia (diaria, semanal, puntual...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "electricista":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Electricista</Text>
                      <TextInput
                        placeholder="Tipo de trabajo (instalación, reparación...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Potencia o ubicación (sala, tablero, toma...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "jardineria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Jardinería</Text>
                      <TextInput
                        placeholder="Tipo de área (patio, jardín, terraza...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                      <TextInput
                        placeholder="Tareas (corte de césped, poda, riego...)"
                        style={{
                          padding: 14,
                          backgroundColor: "white",
                          borderRadius: 4,
                          borderWidth: 1,
                          borderColor: "#00000050",
                          width: "100%"
                        }}
                        placeholderTextColor={"#1E1E1ECC"}
                      />
                    </View>
                  );

                case "montaje":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Montaje</Text>
                      <TextInput
                        placeholder="Qué necesitas montar (mueble, televisor, estante...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                      <TextInput
                        placeholder="Cantidad de objetos a montar"
                        keyboardType="numeric"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                    </View>
                  );

                case "carpinteria":
                  return (
                    <View style={{ width: "100%", gap: 10 }}>
                      <Text style={{ fontWeight: "bold", color: "white", marginTop: 8, marginBottom: 4 }}>Servicio de Carpintería</Text>
                      <TextInput
                        placeholder="Tipo de trabajo (reparación, diseño, instalación...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                      <TextInput
                        placeholder="Material preferido (madera, MDF, melamina...)"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 6,
                          padding: 10,
                          backgroundColor: "white",
                        }}
                      />
                    </View>
                  );

                default:
                  return null;
              }
            })()}

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", gap: 20 }}>
              <Pressable
                onPress={handleToOffert}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 4,
                  alignSelf: "flex-start",
                  backgroundColor: "#FFA962",
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#FFA962",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: 500
                  }}
                >
                  Buscar
                </Text>
              </Pressable>
              <Pressable
                onPress={handleCloseModal}
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  borderRadius: 4,
                  alignSelf: "flex-start",
                  borderWidth: 1,
                  borderColor: "white",
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: 500
                  }}
                >
                  Cerrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginBottom: 50
  },
  firstSection: {
    flex: 1,
    backgroundColor: "#0C85BEDD",
    overflow: "hidden",
  },
  headerTitle: {
    fontFamily: "DM Sans",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 28,
    color: COLORS.text
  },
  heading: {
    marginHorizontal: "auto",
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
});

function BannerDiagonal() {
  const router = useRouter();
  return (
    <View style={stylesBanner.container}>
      <View style={stylesBanner.content}>
        <Image
          source={require("@/assets/images/saludo.png")}
          style={[stylesBanner.image, {
            position: "absolute",
            right: -20,
            bottom: -20
          }]} contentFit="contain" />
        <View style={stylesBanner.textContainer}>
          <Text style={[stylesBanner.title, { color: "#0073B6", fontSize: 22 }]}>
            Servicio personalizado
          </Text>
          <Text style={stylesBanner.subtitle}>
            ¿No encuentras lo que necesitas?
            Pidenos un servicio a medida
          </Text>

          <Pressable style={stylesBanner.button} onPress={() => router.push("/(private)/(services)/professional")}>
            <Text style={stylesBanner.buttonText}>CONTRATAR AHORA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const stylesBanner = StyleSheet.create({
  container: {
    height: 160,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#FF9E5E",
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 30
  },
  orangeBg: {
  },
  content: {
    paddingRight: "10%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    marginRight: 50,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 24,
  },
  subtitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginVertical: 6
  },
  button: {
    backgroundColor: "#0073B6",
    marginTop: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

function BannerDiagonal2() {
  const router = useRouter();
  return (
    <View style={stylesBanner.container}>
      <View style={stylesBanner.content}>
        <Image
          source={require("@/assets/images/llamada.png")}
          style={[stylesBanner.image, {
            position: "absolute",
            right: -20,
            bottom: -20
          }]} contentFit="contain" />
        <View style={stylesBanner.textContainer}>
          <Text style={[stylesBanner.title, { color: "#0073B6", fontSize: 22 }]}>
            Soporte al cliente
          </Text>
          <Text style={stylesBanner.subtitle}>
            De respuestas rápidas a ayuda detallada, obtén el soporte que necesitas
          </Text>

          <Pressable style={stylesBanner.button}>
            <Text style={stylesBanner.buttonText} onPress={() => router.push("/(private)/(services)/listaServicios")}>CONTACTAR AHORA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const servicios = [
  {
    id: 1,
    label: "Fontanería",
    value: "fontaneria",
    nombre: "Fontanería",
    icono: require("@/assets/icons/services/fontaneria.png"),
    iconoSelected: require("@/assets/icons/services/fontaneria_selected.png")
  },
  {
    id: 2,
    label: "Limpieza",
    value: "limpieza",
    nombre: "Limpieza",
    icono: require("@/assets/icons/services/limpieza.png"),
    iconoSelected: require("@/assets/icons/services/limpieza_selected.png"),
  },
  {
    id: 3,
    label: "Electricista",
    value: "electricista",
    nombre: "Electricista",
    icono: require("@/assets/icons/services/electricista.png"),
    iconoSelected: require("@/assets/icons/services/electricista_selected.png"),
  },
  {
    id: 4,
    label: "Jardinería",
    value: "jardineria",
    nombre: "Jardinería",
    icono: require("@/assets/icons/services/jardineria.png"),
    iconoSelected: require("@/assets/icons/services/jardineria_selected.png"),
  },
  {
    id: 5,
    label: "Montaje",
    value: "montaje",
    nombre: "Montaje",
    icono: require("@/assets/icons/services/montaje.png"),
    iconoSelected: require("@/assets/icons/services/montaje_selected.png"),
  },
  {
    id: 6,
    label: "Carpintería",
    value: "carpinteria",
    nombre: "Carpintería",
    icono: require("@/assets/icons/services/carpinteria.png"),
    iconoSelected: require("@/assets/icons/services/carpinteria_selected.png"),
  },
];

function Servicios() {
  const [seleccionado, setSeleccionado] = useState<number>(1);
  const router = useRouter();

  return (
    <View style={stylesServicios.container}>
      {/* <Text style={stylesServicios.titulo}>LOS MÁS SELECCIONADOS</Text> */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        {servicios.slice(0, 3).map(item => {
          const activo = item.id === seleccionado;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                stylesServicios.card,
                activo && { backgroundColor: "#FFA858", borderColor: "#50B4E8" },
              ]}
              onPress={() => {
                setSeleccionado(item.id)
                router.push("/(private)/(services)/professional")
              }}
            >
              <Image
                source={activo ? item.iconoSelected : item.icono}
                style={stylesServicios.icono}
                contentFit="contain"
              />
              <Text
                style={[
                  stylesServicios.texto,
                  activo && { color: "#fff" }
                ]}
              >
                {item.nombre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 15 }}>
        {servicios.slice(3, 6).map(item => {
          const activo = item.id === seleccionado;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                stylesServicios.card,
                activo && { backgroundColor: "#FFA858", borderColor: "#50B4E8" },
              ]}
              onPress={() => {
                setSeleccionado(item.id)
                router.push("/(private)/(services)/professional")
              }}
            >
              <Image
                source={activo ? item.iconoSelected : item.icono}
                style={stylesServicios.icono}
                contentFit="contain"
              />
              <Text
                style={[
                  stylesServicios.texto,
                  activo && { color: "#fff" }
                ]}
              >
                {item.nombre}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const stylesServicios = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    gap: 8,
    marginBottom: 20,
  },
  card: {
    width: 90,
    height: 90,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 4
  },
  icono: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  texto: {
    fontSize: 10,
    color: "#333",
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#0077B6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
  },
});