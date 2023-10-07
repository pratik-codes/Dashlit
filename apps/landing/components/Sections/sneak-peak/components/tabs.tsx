import { SubmitButton } from "../../../button";

export const featuresCta = [
  "links & folders",
  "Customizations",
  "Add your Background",
  "Change Quotes and focus mode",
];

export interface TabsProps {
  currentFeature: string;
  setCurrentFeature: (value: string) => void;
}

const Tabs = ({ currentFeature, setCurrentFeature }: TabsProps) => {
  return (
    <div className="flex justify-center">
      <div className=" flex justify-center">
        <ul className="text-gray-500 dark:text-gray-400 mt-4 flex flex-wrap justify-center text-center text-sm font-medium">
          {featuresCta.map((feature: string, index: number) => (
            <li className="m-1">
              <SubmitButton
                variant={currentFeature === feature ? "primary" : "secondary"}
                onClick={() => setCurrentFeature(feature)}
                className="dark:hover:bg-gray-900 tex-gradient inline-block rounded-lg bg-transparent-white py-3 px-4 hover:bg-grey  dark:hover:text-white"
                aria-current="page"
              >
                {feature}
              </SubmitButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
