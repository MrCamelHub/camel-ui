import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

const PortalCounterContext = createContext<Partial<[number, Dispatch<SetStateAction<number>>]>>([]);

export default PortalCounterContext;
