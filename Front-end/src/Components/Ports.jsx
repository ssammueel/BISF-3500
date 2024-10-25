import { useState } from "react"

export const Specific = () =>{
    return(
        <>
            <form action="" className=' bg-slate-300 flex flex-col p-3 gap-3 w-[45%]'>
                Ip Address:
                <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter ip address' />
                Port to Scan:
                <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter start port' />
                <button className="btn btn-accent w-fit px-5">Scan</button>
            </form>
        </>
    )
}

export const Ranget = () => {

    const[inputValue, setInputValue] = useState('')

    const scanCommands = {
        'Intense Scan': '-T4 -A -v',
        'Intense Scan + UDP': 'nmap -v -sS -sU -T4 -A -v',
        'Intense Scan All TCP Ports': 'nmap -p-65535 -T4 -A -v',
        'Intense Scan No Ping': 'nmap -T4 -A -v -Pn',
        'Ping Scan': 'nmap -sn',
        'Quick Scan': 'nmap -T4 -F',
        'Quick Scan Plus': 'nmap -sV -T4 -O -F --version-light',
        'Quick Traceroute': 'nmap -sn --traceroute',
        'Regular Scan': 'nmap',
        'Comprehensive Scan':
          'nmap -sS -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53 --script "default or (discovery and safe)"',
      };

      const handleOptionChange = (e) => {
        const selectedOption = e.target.value; // Get the selected option
        if (scanCommands[selectedOption]) {
          setInputValue(scanCommands[selectedOption]); // Set input to the command
        }
      };

    return(
        <>
        <form action="" className=' bg-slate-300 flex flex-col p-3 gap-3 w-[45%]'>
            Ip Address:
            <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter ip address' />
            Start Port
            <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter start port' />
            End Port
            <input className='bg-white p-2 indent-3 outline-none rounded-btn' type='text ' placeholder='Enter End port' />
            Validation:
            <input
                className="bg-white p-2 indent-3 outline-none rounded-btn"
                list="options"
                placeholder="Enter Validations"
                name="custom"
                value={inputValue} // Controlled input field
                onChange={(e) => setInputValue(e.target.value)} // Allow manual input
            />

                <datalist id="options">
                    {Object.keys(scanCommands).map((key) => (
                    <option key={key} value={key} />
                    ))}
                </datalist>

                <select
                    className="mt-4 p-2 border rounded"
                    onChange={handleOptionChange}
                    defaultValue="" // Default empty selection
                >
                    <option value="" disabled>
                    Select a scan type
                    </option>
                    {Object.keys(scanCommands).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                    ))}
                </select>
            <button className="btn btn-accent w-fit px-5">Accent</button>
        </form> 
        </>
    )
}